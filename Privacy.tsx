import Header from "./Header";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">

        {/* MAIN HEADING */}
        <h1 className="font-['Anton'] text-5xl md:text-6xl uppercase mb-10 tracking-wide">
          <span className="text-white">Privacy </span>
          <span className="text-green-400">Policy</span>
        </h1>

        <div className="space-y-10 font-['Inter'] text-gray-300 leading-relaxed">

          <p>
            This Privacy Policy explains how Brand X Networking collects,
            uses, stores, and protects information submitted through our website.
          </p>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              Information We Collect
            </h2>

            <p>
              We may collect information such as your name, email address,
              company name, and any information you provide through our
              contact forms.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              How We Use Your Information
            </h2>

            <p>
              We use submitted information to respond to enquiries, provide
              our services, communicate with prospective clients, and improve
              our website.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              Data Protection
            </h2>

            <p>
              We take reasonable measures to protect personal information
              from unauthorized access, loss, misuse, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              Third-Party Services
            </h2>

            <p>
              Our website may use third-party services to support website
              functionality, analytics, communication, or business operations.
              These providers may process information according to their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              Your Rights
            </h2>

            <p>
              You may contact Brand X Networking to request access,
              correction, or deletion of personal information that we hold
              about you, where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase text-green-400 mb-4 tracking-wide">
              Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy, please contact
              Brand X Networking through our website.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
