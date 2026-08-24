import Header from "./Header";
import Footer from "./Footer";

export default function Privacy() {
  const green = "#9DFF00";
  const white = "#FFFFFF";

  const rows = [
    {
      title: "Information We Collect",
      text: "We may collect your name, email address, company name, and any information you submit through our website forms.",
    },
    {
      title: "How We Use Your Information",
      text: "We use your information to respond to enquiries, communicate with prospective clients, provide services, and improve the Brand X Networking experience.",
    },
    {
      title: "Data Protection",
      text: "We take reasonable measures to protect personal information against unauthorized access, misuse, loss, alteration, or disclosure.",
    },
    {
      title: "Third-Party Services",
      text: "We may use third-party platforms for website functionality, analytics, communications, CRM, and other business operations. Their own privacy policies may apply.",
    },
    {
      title: "Cookies & Analytics",
      text: "Our website may use cookies and analytics technologies to understand visitor behaviour and improve performance and user experience.",
    },
    {
      title: "Your Rights",
      text: "You may contact us to request access, correction, or deletion of personal information we hold about you, where applicable.",
    },
    {
      title: "Changes to This Policy",
      text: "We may update this Privacy Policy when necessary. Any updated version will be published on this page.",
    },
    {
      title: "Contact Us",
      text: "If you have questions about this Privacy Policy or how your information is handled, please contact Brand X Networking through our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-16 md:py-24">

        {/* HERO HEADING */}
        <div className="max-w-4xl mb-16">
          <div
            className="font-['Inter'] text-xs md:text-sm  tracking-[0.35em] mb-5"
            style={{ color: green }}
          >
            privacy & data
          </div>

          <h1 className="font-['Anton'] uppercase leading-[0.9] tracking-wide">
            <span
              className="block text-5xl md:text-7xl"
              style={{ color: white }}
            >
              YOUR DATA.
            </span>

            <span
              className="block text-5xl md:text-7xl"
              style={{ color: green }}
            >
              YOUR PRIVACY.
            </span>

            <span
              className="block text-5xl md:text-7xl"
              style={{ color: white }}
            >
              OUR RESPONSIBILITY.
            </span>
          </h1>

          <p
            className="font-['Inter'] mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            This Privacy Policy explains how Brand X Networking collects,
            uses, stores, and protects information submitted through our
            website.
          </p>
        </div>

        {/* POLICY TABLE */}
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
              {/* LEFT */}
              <h2
                className="font-['Anton'] uppercase text-xl md:text-2xl tracking-wide"
                style={{
                  color: index % 2 === 0 ? green : white,
                }}
              >
                {row.title}
              </h2>

              {/* RIGHT */}
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
