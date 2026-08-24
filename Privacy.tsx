import Header from "./Header";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl font-['Inter']">
        <h1 className="font-['Anton'] text-5xl md:text-6xl uppercase mb-8 text-white tracking-wide">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy explains how Brand X Networking collects, uses,
            stores, and protects information submitted through our website.
          </p>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Information We Collect
            </h2>

            <p>
              We may collect information such as your name, email address,
              company name, and any information you provide through our contact
              forms.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              How We Use Your Information
            </h2>

            <p>
              We use submitted information to respond to enquiries, provide our
              services, communicate with prospective clients, and improve our
              website and customer experience.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Data Protection
            </h2>

            <p>
              We take reasonable measures to protect personal information from
              unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Third-Party Services
            </h2>

            <p>
              Our website may use third-party tools and services to support
              communication, analytics, customer relationship management, and
              website functionality. These providers may process information in
              accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Data Retention
            </h2>

            <p>
              We may retain submitted information for as long as reasonably
              necessary to respond to enquiries, provide services, maintain
              business records, and meet legal or operational requirements.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Your Choices
            </h2>

            <p>
              You may contact us if you would like to ask questions about the
              information we hold about you or request that we update or remove
              information where appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy, please contact
              Brand X Networking through the contact information available on
              our website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
