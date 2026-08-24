import Header from "./Header";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl font-['Inter']">
        <h1 className="font-['Anton'] text-5xl md:text-6xl uppercase mb-8 text-white tracking-wide">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
          <p>
            These Terms & Conditions govern your use of the Brand X Networking
            website and our services. By accessing or using this website, you
            agree to these terms.
          </p>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Use of Our Website
            </h2>

            <p>
              You may use this website for lawful purposes only. You must not
              use the website in any way that could damage, disrupt, or
              interfere with its operation, security, or accessibility.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Our Services
            </h2>

            <p>
              Brand X Networking provides business, growth, technology,
              automation, AI integration, branding, and related professional
              services. The exact scope, deliverables, timelines, and fees for
              client work are agreed separately before a project begins.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              No Guaranteed Results
            </h2>

            <p>
              Business, marketing, growth, and technology outcomes depend on
              many factors outside our control. While we work to deliver
              effective strategies and systems, Brand X Networking does not
              guarantee specific revenue, sales, leads, growth, or other
              commercial results unless expressly stated in a written
              agreement.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Intellectual Property
            </h2>

            <p>
              Unless otherwise stated, the content, branding, graphics,
              designs, text, methodology, and other materials available on this
              website are owned by or licensed to Brand X Networking and may
              not be copied, reproduced, distributed, or commercially used
              without permission.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Third-Party Services
            </h2>

            <p>
              Our website and services may use or link to third-party
              platforms, software, websites, or tools. Brand X Networking is
              not responsible for the availability, policies, security, or
              performance of third-party services.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Limitation of Liability
            </h2>

            <p>
              To the extent permitted by applicable law, Brand X Networking
              will not be responsible for indirect, incidental, or
              consequential losses arising from the use of this website or
              reliance on its general information.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Website Information
            </h2>

            <p>
              We aim to keep information on this website accurate and current,
              but we do not guarantee that all information will always be
              complete, error-free, or up to date. Website content may be
              changed or updated without notice.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Privacy
            </h2>

            <p>
              Information submitted through our website is handled in
              accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Changes to These Terms
            </h2>

            <p>
              We may update these Terms & Conditions from time to time.
              Updated terms will be published on this page and will apply from
              the date they are posted.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Contact Us
            </h2>

            <p>
              If you have questions about these Terms & Conditions, please
              contact Brand X Networking through the contact information
              available on our website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
