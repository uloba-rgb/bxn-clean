import Header from "./Header";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy explains how Brand X Networking collects,
            uses, stores, and protects information submitted through our website.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Information We Collect
          </h2>

          <p>
            We may collect information such as your name, email address,
            company name, and any information you provide through our contact forms.
          </p>

          <h2 className="text-2xl font-bold text-white">
            How We Use Your Information
          </h2>

          <p>
            We use submitted information to respond to enquiries, provide our
            services, communicate with prospective clients, and improve our website.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Data Protection
          </h2>

          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, loss, misuse, or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Contact
          </h2>

          <p>
            If you have questions about this Privacy Policy, please contact
            Brand X Networking through the contact information available on our website.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
