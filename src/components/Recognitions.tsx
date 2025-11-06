import nottinghamLogo from "../assets/nottingham-uni-logo.png";
import britishEmbassyLogo from "../assets/british-embassy-logo.png";
import mitLogo from "../assets/mit-logo.png";
import ventureFestLogo from "../assets/venture-fest-logo.jpg";
import iitBombayLogo from "../assets/iit-bombay-logo.jpg";
import oxfordLogo from "../assets/oxford-logo.jpg";

const Recognitions = () => {
  const recognitions = [
    {
      title: "University of Nottingham",
      description: "Endorsed by the University of Nottingham 2014",
      logo: nottinghamLogo,
    },
    {
      title: "British Embassy",
      description: "Entrepreneur Endorsed in 2015 & 2016",
      logo: britishEmbassyLogo,
    },
    {
      title: "MIT",
      description: "MIT GSW Global Start-Up Entrepreneurship Scholar 2016",
      logo: mitLogo,
    },
    {
      title: "VentureFest",
      description: "Top 20 Pitch deck in Venture Fest Feb 2016",
      logo: ventureFestLogo,
    },
    {
      title: "IIT Bombay",
      description: "Core- Team Members are from IIT-B",
      logo: iitBombayLogo,
    },
    {
      title: "Oxford Entrepreneurs",
      description: "Member at Oxford Entrepreneurs",
      logo: oxfordLogo,
    },
  ];

  return (
    <section
      id="recognitions"
      className="py-20 bg-design-black"
      aria-labelledby="recognitions-heading"
      role="region"
    >
      <div className="w-full px-6">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="recognitions-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
            itemProp="headline"
          >
            <span className="text-white">Current </span>
            <span className="text-design-cyan">Recognitions</span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Trusted and recognized by leading institutions worldwide for our
            innovative approach to seismic exploration technology.
          </p>
        </header>

        {/* White Box with Recognition Cards */}
        <div
          className="bg-white rounded-lg p-8 md:p-12"
          role="main"
          aria-label="Academic and institutional recognitions"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="List of institutional recognitions and achievements"
          >
            {recognitions.map((recognition) => (
              <article
                key={recognition.title}
                className="text-center"
                role="listitem"
                itemScope
                itemType="https://schema.org/Achievement"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={recognition.logo}
                    alt={`${recognition.title} logo - ${recognition.description}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                    itemProp="image"
                    title={`Logo of ${recognition.title}`}
                  />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {recognition.title}
                </h3>
                <p className="text-gray-600 text-sm" itemProp="description">
                  {recognition.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
