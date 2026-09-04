import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password updated successfully.");
    window.location.href = "https://brandxnetworking.com/signin";
  };

  return (
    <main className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md border border-white/10 bg-black/50 p-8 text-center backdrop-blur-md">
        <p className="mb-3 text-sm text-[#9DFF00]">secure access</p>

        <h1 className="font-['Anton'] text-5xl uppercase text-white">
          Reset Password
        </h1>

        <p className="mt-4 text-white/70">
          Enter your new password below.
        </p>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-8 mb-3 w-full border border-white/20 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#9DFF00]"
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-4 w-full border border-white/20 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#9DFF00]"
        />

        <button
          onClick={handleUpdatePassword}
          className="w-full bg-[#9DFF00] px-6 py-4 font-bold text-black transition-all hover:bg-white"
        >
          Update Password
        </button>
      </div>
    </main>
  );
}
