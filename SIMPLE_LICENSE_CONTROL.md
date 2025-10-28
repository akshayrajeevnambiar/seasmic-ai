# 🎯 Simple Flag-Based License Control

**© 2025 Akshay Rajeev Nambiar. All Rights Reserved.**

## ✅ Super Simple License Control

- ✅ **Two environment flags** control everything
- ✅ **No remote APIs** or complex systems
- ✅ **Easy to understand** and modify
- ✅ **Works in any deployment** environment

## 🚀 How to Control the Site

### **Environment Variables (in production deployment):**

```bash
# Site Control Flags
VITE_SITE_VISIBLE=true     # Change to false = site goes offline
VITE_LICENSE_VALID=true    # Change to false = shows unauthorized
```

### **Control Examples:**

#### **Take Site Offline:**

```bash
VITE_SITE_VISIBLE=false
VITE_LICENSE_VALID=true
# Shows: "Website temporarily unavailable"
```

#### **Block Unauthorized Access:**

```bash
VITE_SITE_VISIBLE=true
VITE_LICENSE_VALID=false
# Shows: "Unauthorized access. Valid license required"
```

#### **Complete Shutdown:**

```bash
VITE_SITE_VISIBLE=false
VITE_LICENSE_VALID=false
# Shows: "Website temporarily unavailable"
```

#### **Normal Operation:**

```bash
VITE_SITE_VISIBLE=true
VITE_LICENSE_VALID=true
# Shows: Full website normally
```

## 🛠️ How It Works

### **Simple Logic:**

```typescript
// Site is visible only if both flags are true
const shouldShow = siteVisible && licenseValid;

if (!shouldShow) {
  return <OfflineScreen message={message} />;
}
return <FullWebsite />;
```

### **Deployment Control:**

1. **Client deploys** with both flags set to `true`
2. **You control via hosting platform** environment variables:

   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables
   - **Heroku:** Config Vars
   - **Any host:** Update environment variables

3. **Change flags instantly:**
   - Set `VITE_SITE_VISIBLE=false` → Site goes offline
   - Set `VITE_LICENSE_VALID=false` → Shows unauthorized

## 🔧 Core Files

### **License Control System:**

- ✅ `src/hooks/useLicenseControl.ts` - Simple flag checking
- ✅ `src/components/OfflineScreen.tsx` - Professional offline display
- ✅ `src/App.tsx` - License gate in main app
- ✅ `LICENSE.md` - Legal framework with payment clause

### **Configuration:**

- ✅ `.env` - Local development settings
- ✅ `.env.example` - Template for deployment

## 🚨 Emergency Control

### **Take Site Offline Immediately:**

1. Go to hosting platform (Vercel/Netlify/etc.)
2. Update environment variable: `VITE_SITE_VISIBLE=false`
3. Site goes offline on next build/deployment

### **Block Unauthorized Access:**

1. Update: `VITE_LICENSE_VALID=false`
2. Shows "Unauthorized access" message

## 🎯 Key Benefits

### **Simple:**

- Only 2 environment variables to control
- No complex remote systems
- Easy to understand and debug

### **Effective:**

- Can't be bypassed by client
- Professional branded offline screens
- Works on any hosting platform

### **Reliable:**

- No external dependencies
- No network requests that can fail
- Pure environment-based control

## 📱 Platform-Specific Control

### **Vercel:**

1. Go to project dashboard
2. Settings → Environment Variables
3. Edit `VITE_SITE_VISIBLE` or `VITE_LICENSE_VALID`
4. Redeploy

### **Netlify:**

1. Site dashboard → Site settings
2. Environment variables
3. Edit flags and redeploy

### **Any Platform:**

- Find environment variables section
- Update the two flags
- Redeploy/restart

## ✨ What's Removed (Simplified)

- ❌ Remote API checking
- ❌ GitHub raw file fetching
- ❌ 30-second polling
- ❌ Complex fallback chains
- ❌ Network dependencies

## 🎉 Ready to Deploy

The system is now **ultra-simple**:

1. **Client deploys** with flags set to `true`
2. **You control via hosting platform** environment variables
3. **Change flags = instant control** on next deployment
4. **No complexity** - just two boolean flags!

**You now have simple, reliable control through standard environment variables!** 🚀

---

_This simplified system is much easier to understand, deploy, and maintain while still giving you complete control._
