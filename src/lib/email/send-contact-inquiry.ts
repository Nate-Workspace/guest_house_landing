import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import {
  buildContactInquiryHtml,
  buildContactInquiryText,
  type ContactInquiry,
} from "./contact-inquiry-template";

const DEFAULT_INQUIRY_TO = "nathanisrael.pro@gmail.com";
const DEFAULT_FROM = `${siteConfig.name} <onboarding@resend.dev>`;

export async function sendContactInquiry(inquiry: ContactInquiry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INQUIRY_TO ?? DEFAULT_INQUIRY_TO;
  const from = process.env.RESEND_FROM ?? DEFAULT_FROM;

  if (!apiKey) {
    throw new Error(
      "Email is not configured. Add RESEND_API_KEY to your environment.",
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: inquiry.email,
    subject: `New stay inquiry from ${inquiry.name} — ${siteConfig.name}`,
    html: buildContactInquiryHtml(inquiry),
    text: buildContactInquiryText(inquiry),
  });

  if (error) {
    throw new Error(error.message);
  }
}
