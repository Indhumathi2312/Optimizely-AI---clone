"use client";

import { useEffect } from "react";

export default function FormInteractive() {
  useEffect(() => {
    const form = document.getElementById("lets-grow-form") as HTMLFormElement | null;
    if (!form) return;

    const successMsg = document.getElementById("grow-form-success");
    const submitBtn = document.getElementById("grow-submit-btn");

    const handleSubmit = (e: SubmitEvent) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.textContent = "Submitting...";
        (submitBtn as HTMLButtonElement).disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.textContent = "Get started";
          (submitBtn as HTMLButtonElement).disabled = false;
        }
        if (successMsg) {
          successMsg.classList.remove("hidden");
        }
        form.reset();
      }, 600);
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
