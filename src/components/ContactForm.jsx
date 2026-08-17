"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

const submitToWeb3Forms = async (payload, accessKey) => {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message || "Submission failed");
  }
  return data;
};

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = (formData) => {
    const errors = {};

    const name = (formData.get("name") || "").trim();
    if (!name) errors.name = "Please enter your name.";

    const email = (formData.get("email") || "").trim();
    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    const phone = (formData.get("phone") || "").trim();
    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    const message = (formData.get("message") || "").trim();
    if (!message) errors.message = "Please enter a message.";

    return errors;
  };

  // Only allow digits in the phone field as the user types, capped at 10
  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      return;
    }

    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      subject: "New Contact Form Submission - Pooja Packaging Industries",
    };

    try {
      // Fire both submissions in parallel. We redirect if AT LEAST ONE
      // succeeds, so a hiccup on one inbox doesn't block the user.
      const results = await Promise.allSettled([
        submitToWeb3Forms(payload, "6e5aa758-2e59-4bc3-b635-cd128da0793b"),
        submitToWeb3Forms(payload, "2606222c-430a-462b-b859-eb5b9defa93c"),
      ]);

      const atLeastOneSucceeded = results.some(
        (r) => r.status === "fulfilled"
      );

      if (atLeastOneSucceeded) {
        form.reset();
        router.push("/thank-you");
        return;
      }

      setError("Something went wrong. Please try again or call us directly.");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 lg:space-y-6">
      {/* Honeypot field for spam bots - kept out of view, never shown to real users */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
        />
        {fieldErrors.email && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          inputMode="numeric"
          maxLength={10}
          onInput={handlePhoneInput}
          className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
        />
        {fieldErrors.phone && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.phone}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          className="w-full rounded-xl border border-gray-300 p-5 text-black outline-none resize-none focus:border-[#C23E34]"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-gradient-to-b from-[#EBA2A2] to-[#C23E34] text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? "Sending..." : "Submit Now"}
      </button>
    </form>
  );
};

export default ContactForm;