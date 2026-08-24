import Header from "./Header";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            These Terms & Conditions govern your use of the Brand X Networking
            website and our services. By using this website, you agree to these
            terms.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Use of Our Website
          </h2>

          <p>
            You may use this website for lawful purposes only. You must not use
            the website in a way that could damage, disrupt, or interfere with
            its operation or the experience of other users.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Our Services
          </h2>

          <p>
            Information presented on this website provides a general overview
            of Brand X Networking and our services. Specific project scope,
            deliverables, timelines, fees, and responsibilities may be governed
            by separate agreements between Brand X Networking and its clients.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Intellectual Property
          </h2>

          <p>
            Unless otherwise stated, the content, branding, graphics, designs,
            text, and other original materials on this website belong to Brand X
            Networking and may not be copied, reproduced, or distributed without
            permission.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Third-Party Services
          </h2>

          <p>
            Our website may contain links to or integrations with third-party
            websites and services. Brand X Networking is not responsible for
            the content, availability, privacy practices, or policies of those
            third parties.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Limitation of Liability
          </h2>

          <p>
            To the extent permitted by applicable law, Brand X Networking will
            not be liable for indirect or consequential losses arising from the
            use of this website or reliance on information presented on it.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Changes to These Terms
          </h2>

          <p>
            We may update these Terms & Conditions when necessary. Any changes
            will be reflected on this page.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Contact Us
          </h2>

          <p>
            If you have questions regarding these Terms & Conditions, please
            contact Brand X Networking through the contact information provided
            on our website.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
