"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ContactForm, { POPUP_SEEN_KEY } from "@/components/ContactForm";

const POPUP_DELAY_MS = 5000;

// Site-wide enquiry popup, mounted once in the root layout.
// - Appears 5 seconds after the visitor lands on any page.
// - Shows only once per browser tab session (sessionStorage), so moving
//   between pages or reloading won't bring it back. It shows again only
//   after the tab is closed and the site is opened fresh.
// - Because the layout stays mounted during client-side navigation, the
//   5-second timer keeps running even if the visitor changes page.
const PopupForm = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(POPUP_SEEN_KEY) === "1";
    } catch {}
    if (alreadySeen) return;

    const timer = setTimeout(() => {
      try {
        if (sessionStorage.getItem(POPUP_SEEN_KEY) === "1") return;
        sessionStorage.setItem(POPUP_SEEN_KEY, "1");
      } catch {}
      setOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Lock background scroll and allow closing with Escape while open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
    >
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F7F7F7] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 transition hover:bg-gray-200 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2
          id="enquiry-popup-title"
          className="pr-8 text-2xl font-semibold text-black"
        >
          Get a Free Quote
        </h2>
        <p className="mt-1 mb-5 text-sm text-gray-600">
          Share your packaging requirement and our team will get back to you
          shortly.
        </p>

        <ContactForm
          compact
          subject="New Popup Enquiry - Pooja Packaging Industries"
          onSuccess={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default PopupForm;
