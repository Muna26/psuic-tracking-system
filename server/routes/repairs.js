"use server";

import { getRepairServicesData } from "@/utils/getRepairServicesData";
import { handleBooking } from "@/utils/handleBooking";
import { handleUpload } from "@/utils/handleUpload";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const repairServicesData = getRepairServicesData();
    return new Response(JSON.stringify(repairServicesData));
  } catch (error) {
    console.error("Error fetching repair services data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch repair services data." }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, machineModel, issueDescription, appointmentDate } =
      await req.json();

    const bookingId = await handleBooking({
      name,
      machineModel,
      issueDescription,
      appointmentDate,
    });

    return new Response(JSON.stringify({ bookingId }));
  } catch (error) {
    console.error("Error handling booking:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

export async function POST(req) {
  try {
    const file = await req.formData();
    const uploadedFile = await handleUpload(file.get("file"));

    return new Response(JSON.stringify({ uploadedFile }));
  } catch (error) {
    console.error("Error handling file upload:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}