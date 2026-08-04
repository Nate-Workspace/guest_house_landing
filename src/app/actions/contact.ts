"use server";

import { getRoomBySlug } from "@/data/rooms";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = getString(formData.get("name"));
  const email = getString(formData.get("email"));
  const phone = getString(formData.get("phone"));
  const room = getString(formData.get("room"));
  const checkIn = getString(formData.get("checkIn"));
  const checkOut = getString(formData.get("checkOut"));
  const message = getString(formData.get("message"));

  if (name.length < 2) {
    return {
      success: false,
      message: "Please enter your full name.",
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (phone && phone.replace(/\D/g, "").length < 6) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    };
  }

  if (room && !getRoomBySlug(room)) {
    return {
      success: false,
      message: "Please select a valid room preference.",
    };
  }

  if (checkIn && Number.isNaN(Date.parse(checkIn))) {
    return {
      success: false,
      message: "Please enter a valid check-in date.",
    };
  }

  if (checkOut && Number.isNaN(Date.parse(checkOut))) {
    return {
      success: false,
      message: "Please enter a valid check-out date.",
    };
  }

  if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
    return {
      success: false,
      message: "Check-out must be after check-in.",
    };
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Please include a message with at least 10 characters.",
    };
  }

  const inquiry = {
    name,
    email,
    phone: phone || undefined,
    room: room ? getRoomBySlug(room)?.name : undefined,
    checkIn: checkIn || undefined,
    checkOut: checkOut || undefined,
    message,
    submittedAt: new Date().toISOString(),
  };

  console.log("[Contact inquiry]", inquiry);

  // TODO: Send email via Resend or SMTP, e.g.
  // await resend.emails.send({
  //   from: "inquiries@serenite-guesthouse.com",
  //   to: siteConfig.contact.email,
  //   subject: `New inquiry from ${name}`,
  //   text: JSON.stringify(inquiry, null, 2),
  // });

  return {
    success: true,
    message:
      "Thank you — your inquiry has been received. We'll respond within 24 hours.",
  };
}
