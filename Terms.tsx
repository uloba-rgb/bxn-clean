import Header from "./Header";
import Footer from "./Footer";

export default function Terms() {
  const green = "#9DFF00";
  const white = "#FFFFFF";

  const rows = [
    {
      title: "Acceptance of Terms",
      text: "By accessing or using the Brand X Networking website, you agree to these Terms & Conditions. If you do not agree with these terms, please discontinue use of the website.",
    },
    {
      title: "Our Services",
      text: "Brand X Networking provides business strategy, growth systems, digital solutions, AI integration, marketing, branding, consulting, and related business services. Specific services and deliverables may be governed by separate agreements.",
    },
    {
      title: "Website Use",
      text: "You agree to use this website only for lawful purposes and in a way that does not damage, disrupt, interfere with, or compromise the website, its systems, or other users.",
    },
    {
      title: "Intellectual Property",
      text: "Unless otherwise stated, the BXN brand, website content, graphics, designs, methodologies, written materials, and other original materials are owned by or licensed to Brand X Networking and may not be copied or reproduced without permission.",
    },
    {
      title: "Information & Accuracy",
      text: "We aim to keep information on this website accurate and current. However, website content may change and should not be treated as a guarantee of specific business, marketing, financial, or commercial results.",
    },
    {
      title: "Third-Party Services",
      text: "Our website may use or link to third-party platforms, tools, websites, or services. Brand X Networking is not responsible for the availability, content, policies, or practices of independent third parties.",
    },
    {
      title: "Limitation of Liability",
      text: "To the extent permitted by applicable law, Brand X Networking will not be liable for indirect, incidental, or consequential losses arising solely from the use of, or inability to use, this website.",
    },
    {
      title: "Client Engagements",
      text: "Projects, fees, payment terms, deliverables, timelines, responsibilities, and other commercial terms agreed with clients may be governed by a separate proposal, contract, statement of work, or written agreement.",
    },
    {
      title: "Changes to Terms",
      text: "We may update these Terms & Conditions when necessary. Updated terms will become available on this page, and continued use of the website after an update constitutes acceptance of the revised terms where permitted by law.",
    },
    {
      title: "Contact",
      text: "If you have questions regarding these Terms & Conditions, please contact Brand X Networking through the contact information provided on our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-16 md:py-24">

        {/* HERO */}
        <div className="max-w-4xl mb-16">
          <div
              className="font-['Inter'] text-xs md:text-sm mb-0"
            style={{ color: green }}
          >
             terms & conditions
          </div>

          <h1 className="font-['Anton'] uppercase leading-[0.9] tracking-wide">

            <span
              className="block text-5xl md:text-7xl"
              style={{ color: white }}
            >
              CLEAR TERMS.
            </span>

            <span
              className="block text-5xl md:text-7xl"
              style={{ color: green }}
            >
              CLEAR EXPECTATIONS.
            </span>

            <span
              className="block text-5xl md:text-7xl"
              style={{ color: white }}
            >
              BETTER BUSINESS.
            </span>

          </h1>

          <p
            className="font-['Inter'] mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            These Terms & Conditions explain the rules governing your use
            of the Brand X Networking website and the information and
            services made available through it.
          </p>
        </div>

        {/* TERMS TABLE */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-4 md:gap-10 py-8 md:py-10 border-b"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >

              {/* LEFT TITLE */}
              <h2
                className="font-['Anton'] uppercase text-xl md:text-2xl tracking-wide"
                style={{
                  color: index % 2 === 0 ? green : white,
                }}
              >
                {row.title}
              </h2>

              {/* RIGHT TEXT */}
              <p
                className="font-['Inter'] text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {row.text}
              </p>

            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
