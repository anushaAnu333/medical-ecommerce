"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2DFCF]">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#160D05] mb-2">
          Join our newsletter
        </h3>
        <p className="text-xl font-semibold text-[#8F7D6A]">
          Sign Up for an Instant 15% Discount
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8F7D6A] w-5 h-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full pl-10 pr-4 py-3 border border-[#E2DFCF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3744A] focus:border-[#D3744A] bg-[#EEEDE7] text-[#160D05] placeholder-[#8F7D6A]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gradient-to-r from-[#D3744A] to-[#503217] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
          {status === "loading" ? (
            "Signing up..."
          ) : (
            <>
              Sign up
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${
              status === "success"
                ? "bg-[#E8E6DE] text-[#503217] border border-[#E2DFCF]"
                : "bg-[#D3744A] bg-opacity-10 text-[#D3744A] border border-[#D3744A] border-opacity-30"
            }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
