import { siteConfig } from "@/config/site";

export type ContactInquiry = {
  name: string;
  email: string;
  phone?: string;
  room?: string;
  checkIn?: string;
  checkOut?: string;
  message: string;
};

function formatDate(value?: string): string {
  if (!value) {
    return "Not specified";
  }

  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 16px 10px 0;color:#5a6478;font-size:14px;white-space:nowrap;vertical-align:top;width:140px;">${label}</td>
      <td style="padding:10px 0;color:#121826;font-size:14px;line-height:1.5;">${value}</td>
    </tr>
  `;
}

export function buildContactInquiryHtml(inquiry: ContactInquiry): string {
  const phone = inquiry.phone ?? "Not provided";
  const room = inquiry.room ?? "No preference";

  return `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#f5f7fa;font-family:Georgia,'Times New Roman',serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fa;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid rgb(20 28 46 / 0.1);border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:28px 28px 12px;border-bottom:1px solid rgb(20 28 46 / 0.1);">
                    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#141c2e;">New inquiry</p>
                    <h1 style="margin:0;font-size:28px;font-weight:400;color:#121826;">${siteConfig.name}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      ${row("Guest", inquiry.name)}
                      ${row("Email", `<a href="mailto:${inquiry.email}" style="color:#141c2e;text-decoration:none;">${inquiry.email}</a>`)}
                      ${row("Phone", phone)}
                      ${row("Room", room)}
                      ${row("Check-in", formatDate(inquiry.checkIn))}
                      ${row("Check-out", formatDate(inquiry.checkOut))}
                    </table>
                    <div style="margin-top:20px;padding:18px;background:#eef1f6;border-radius:8px;">
                      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#141c2e;">Message</p>
                      <p style="margin:0;font-size:15px;line-height:1.6;color:#121826;white-space:pre-wrap;">${inquiry.message}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 28px 24px;font-size:12px;line-height:1.5;color:#5a6478;">
                    Reply directly to this guest using the email address above.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export function buildContactInquiryText(inquiry: ContactInquiry): string {
  return [
    `New inquiry — ${siteConfig.name}`,
    "",
    `Guest: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone ?? "Not provided"}`,
    `Room: ${inquiry.room ?? "No preference"}`,
    `Check-in: ${formatDate(inquiry.checkIn)}`,
    `Check-out: ${formatDate(inquiry.checkOut)}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
}
