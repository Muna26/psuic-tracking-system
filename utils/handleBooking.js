"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { sendEmail } from "@/utils/sendEmail";

export const handleBooking = async ({ name, machineModel, issueDescription, appointmentDate }) => {
  const { t } = useTranslation("common");

  try {
    const isValidDate = validateDate(appointmentDate);
    if (!isValidDate) {
      throw new Error(t("invalidDate"));
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedMachineModel = sanitizeInput(machineModel);
    const sanitizedIssueDescription = sanitizeInput(issueDescription);

    await sendEmail({
      to: "info@washingmachineshop.com",
      subject: t("bookingSubject"),
      message: `Name: ${sanitizedName}\nMachine Model: ${sanitizedMachineModel}\nIssue Description: ${sanitizedIssueDescription}\nAppointment Date: ${appointmentDate}`,
    });

    return true;
  } catch (error) {
    console.error("Error sending booking email:", error);
    throw new Error(error.message);
  }
};

const validateDate = (date) => {
  const today = new Date();
  const selectedDate = new Date(date);
  return selectedDate >= today;
};

const sanitizeInput = (input) => {
  // Basic input sanitization to prevent XSS attacks
  return input.replace(/<[^>]+>/g, "");
};