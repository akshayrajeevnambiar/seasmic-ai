import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
    console.log('Starting pre-rendering...');

    const preview = spawn('npm', ['run', 'preview'], { stdio: 'pipe', shell: true });
    let port = 0;

    const serverUrl = await new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {
            reject(new Error("Timeout waiting for preview server to start."));
        }, 15000);

        preview.stdout.on('data', (data) => {
            const cleanOutput = data.toString().replace(/\u001b\[.*?m/g, '');
            console.log(`[Preview Server] ${cleanOutput.trim()}`);
            const match = cleanOutput.match(/(?:Local:\s+)?(http:\/\/localhost:(\d+))/);
            if (match) {
                clearTimeout(timeout);
                port = parseInt(match[2]);
                resolve(match[1]);
            }
        });
        
        preview.stderr.on('data', (data) => {
            console.error(`[Preview Server Error] ${data.toString().trim()}`);
        });
    });

    console.log(`Preview server is running on ${serverUrl}`);

    let browser;
    if (process.env.VERCEL) {
        const chromium = await import('@sparticuz/chromium').then(m => m.default);
        const core = await import('puppeteer-core').then(m => m.default);
        browser = await core.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
        });
    } else {
        browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    }
    const page = await browser.newPage();
    
    // Set viewport to a standard desktop size to ensure full rendering
    await page.setViewport({ width: 1920, height: 1080 });

    const routes = [
        '/',
        '/privacy-policy',
        '/terms-of-use',
        '/ethics-ai-transparency',
        '/services/seismic-surveying',
        '/services/lidar-drone-technology',
        '/services/ai-data-analytics',
        '/services/digital-terrain-mapping',
        '/services/energy-exploration',
        '/services/environmental-impact-assessment',
        '/services/remote-sensing-solutions',
        '/services/geophysical-intelligence'
    ];

    const distFolder = path.resolve(__dirname, '..', 'dist');

    try {
        for (const route of routes) {
            console.log(`Pre-rendering ${route}...`);
            await page.goto(`${serverUrl}${route === '/' ? '' : route}`, { waitUntil: 'networkidle0' });
            
            // Wait for React app to mount. We wait for `#root > div` or similar.
            await page.waitForSelector('#root');
            // Adding a small delay to allow any animations or async state to settle
            await new Promise(r => setTimeout(r, 2000));
            
            const html = await page.content();
            
            let distPath;
            if (route === '/') {
                distPath = path.join(distFolder, 'index.html');
            } else {
                // E.g. /privacy-policy -> dist/privacy-policy/index.html
                const routeDir = path.join(distFolder, route.substring(1));
                fs.mkdirSync(routeDir, { recursive: true });
                distPath = path.join(routeDir, 'index.html');
            }
            
            fs.writeFileSync(distPath, html);
            console.log(`Saved ${distPath}`);
        }

        const baseUrl = 'https://seismicai.ca';
        
        fs.writeFileSync(path.join(distFolder, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml`);
        console.log('Saved robots.txt');

        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url><loc>${baseUrl}${route === '/' ? '' : route}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
</urlset>`;
        fs.writeFileSync(path.join(distFolder, 'sitemap.xml'), sitemapContent);
        console.log('Saved sitemap.xml');

    } catch (e) {
        console.error('Error during prerendering:', e);
    } finally {
        await browser.close();
        if (process.platform === 'win32' && preview.pid) {
            spawn("taskkill", ["/pid", preview.pid.toString(), '/f', '/t']);
        } else {
            preview.kill();
        }
        process.exit(0);
    }
}
prerender();
