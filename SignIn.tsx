import Header from "./Header";
import Footer from "./Footer";
import { supabase } from "./lib/supabase";

export default function SignIn() {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://brandxnetworking.com",
      },
    });

    if (error) {
      console.error("Google sign-in error:", error.message);
      alert("Sign in failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="w-full max-w-md border border-white/10 bg-black/40 backdrop-blur-md p-8 text-center">
          <p className="mb-3 text-sm text-[#9DFF00]">
            secure access
          </p>

          <h1 className="font-['Anton'] text-5xl uppercase text-white">
            Sign In
          </h1>

          <p className="mt-4 text-white/70">
            Continue with your Google account to access BXN.
          </p>

          <button
            onClick={handleGoogleSignIn}
            className="mt-8 w-full bg-[#9DFF00] px-6 py-4 font-bold text-black transition-all hover:bg-white"
          >
            Continue with Google
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
