"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { sendEmail } from "@/utils/sendEmail";

export const handleContactForm = async ({ name, email, message }) => {
  const { t } = useTranslation("common");

  try {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      throw new Error(t("invalidEmail"));
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    await sendEmail({
      to: "info@washingmachineshop.com",
      subject: t("contactSubject"),
      message: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
    });

    return true;
  } catch (error) {
    console.error("Error sending contact form email:", error);
    throw new Error(error.message);
  }
};

const validateEmail = (email) => {
  // Basic email validation using a regular expression
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const sanitizeInput = (input) => {
  // Basic input sanitization to prevent XSS attacks
  return input.replace(/<[^>]+>/g, "");
};