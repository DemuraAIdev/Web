import { useState, useRef, Suspense } from "react";

import siteMetadata from "@/data/siteMetadata";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

const NewsletterForm = ({ title = "Subscribe to the newsletter" }) => {
  const inputEl = useRef(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [form, setForm] = useState({ state: "Inital" });

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "Loading" });

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "Error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setError(false);
    setSubscribed(true);
    setForm({
      state: "Success",
      message: `Wow! That was Giga.`,
    });
  };

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <form className="relative my-4" onSubmit={subscribe}>
        <label className="sr-only" htmlFor="email-input">
          Email address
        </label>
        <input
          autoComplete="email"
          className="mt-1 block w-full rounded-md bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          id="email-input"
          name="email"
          placeholder={
            subscribed ? "You're subscribed !  🎉" : "Enter your email"
          }
          ref={inputEl}
          required
          type="email"
          disabled={subscribed}
        />
        <button
          className={`absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100`}
          type="submit"
          disabled={subscribed}
        >
          {form.state === "Loading" ? <LoadingSpinner /> : "Sign"}
        </button>
      </form>
      {form.state === "Error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "Success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          Your information is only used to display your name and reply by email.
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => (
  <div className="dark:bg-blue-opaque my-4 w-full rounded-md border-2  border-blue-200 bg-blue-50 p-6  shadow-xl transition dark:border-gray-600 dark:bg-black dark:shadow-none">
    <NewsletterForm title={title} />
  </div>
);
