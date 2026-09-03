import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { supabase } from "./lib/supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
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
  const handleEmailSignIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  window.location.href = "https://brandxnetworking.com";
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
            <div className="my-6 text-center text-white/40">
  or
</div>

<input
  type="email"
  placeholder="Email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-3 w-full border border-white/20 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#9DFF00]"
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mb-4 w-full border border-white/20 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#9DFF00]"
/>
          <button
  onClick={handleEmailSignIn}
  className="w-full border border-[#9DFF00] px-6 py-4 font-bold text-[#9DFF00] transition-all hover:bg-[#9DFF00] hover:text-black"
>
  Sign in with Email
</button>
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
