"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { handleContactForm } from "@/utils/handleContactForm";

const Contact = () => {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await handleContactForm({ name, email, message });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("contactUsTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t("contactInformation")}
            </h3>
            <ul className="list-disc text-gray-600">
              <li>
                <span className="font-bold">{t("phone")}:</span>{" "}
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <span className="font-bold">{t("email")}:</span>{" "}
                <a href="mailto:info@washingmachineshop.com">
                  info@washingmachineshop.com
                </a>
              </li>
              <li>
                <span className="font-bold">{t("address")}:</span>{" "}
                123 Main Street, Anytown, CA 12345
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("sendMessage")}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              >
                {isSubmitting ? t("sending") : t("send")}
              </button>
              {submitError && (
                <div className="text-red-500">{submitError}</div>
              )}
              {submitSuccess && (
                <div className="text-green-500">{t("messageSent")}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;