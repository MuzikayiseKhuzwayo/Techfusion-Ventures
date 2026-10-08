import nodemailer from "nodemailer";

export interface ContactNotificationData {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  submittedAt?: string;
}

export interface EmailDispatchResult {
  userEmailSent: boolean;
  adminEmailSent: boolean;
  simulated?: boolean;
  errors?: string[];
}

export function getAdminEmails(): string[] {
  const list = new Set<string>();
  const envVal = process.env.ADMIN_NOTIFICATION_EMAIL;
  if (envVal) {
    envVal
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean)
      .forEach((e) => list.add(e));
  }
  // Ensure the founder's requested mailbox is always notified
  list.add("muzikhuzwayo@techfusion-ventures.xyz");
  return Array.from(list);
}

export function getSenderEmail(): string {
  if (process.env.EMAIL_FROM) return process.env.EMAIL_FROM;
  if (process.env.SMTP_FROM) return process.env.SMTP_FROM;
  if (process.env.RESEND_FROM) return process.env.RESEND_FROM;
  if (process.env.SMTP_USER) return `TechFusion Automata <${process.env.SMTP_USER}>`;
  return "TechFusion Automata <muzikhuzwayo@techfusion-ventures.xyz>";
}

/**
 * Generate HTML email template for the user acknowledging their submission.
 */
export function generateUserEmailHtml(data: ContactNotificationData): string {
  const { name, subject, message } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your Message | TechFusion Automata</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b0f17; width: 100% !important;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc); line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 20px 32px; border-bottom: 1px solid #1f2937;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="font-size: 13px; letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; color: #38bdf8;">TECHFUSION</span>
                    <span style="font-size: 13px; letter-spacing: 0.15em; font-weight: 400; text-transform: uppercase; color: #94a3b8; margin-left: 4px;">AUTOMATA</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.025em;">
                We received your message
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #cbd5e1;">
                Hi <strong style="color: #f8fafc;">${escapeHtml(name)}</strong>,
              </p>
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #94a3b8;">
                Thank you for reaching out to us. We have received your submission and our team will be in contact with you soon to discuss your inquiry and explore how we can collaborate.
              </p>

              <!-- Summary Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #1a2234; border: 1px solid #2d3748; border-radius: 12px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 20px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #38bdf8; margin-bottom: 12px;">
                      Submission Details
                    </div>
                    ${subject ? `
                    <div style="margin-bottom: 10px;">
                      <span style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Subject</span>
                      <span style="font-size: 14px; color: #e2e8f0; font-weight: 500;">${escapeHtml(subject)}</span>
                    </div>` : ""}
                    ${message ? `
                    <div>
                      <span style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Your Message</span>
                      <p style="margin: 0; font-size: 14px; color: #cbd5e1; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</p>
                    </div>` : ""}
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 8px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                If you have any immediate additional details to share, feel free to reply directly to this email.
              </p>
              <p style="margin: 24px 0 0 0; font-size: 14px; color: #cbd5e1;">
                Warm regards,<br>
                <strong style="color: #ffffff;">The TechFusion Automata Team</strong>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0d131f; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b;">
                TechFusion Automata &bull; Accelerating towards the future in Africa
              </p>
              <p style="margin: 0; font-size: 12px; color: #475569;">
                <a href="https://techfusion-ventures.xyz" style="color: #38bdf8; text-decoration: none;">techfusion-ventures.xyz</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generate plain text for the user confirmation.
 */
export function generateUserEmailText(data: ContactNotificationData): string {
  return `Hi ${data.name},

Thank you for reaching out to TechFusion Automata.

We have received your submission and our team will be in contact with you soon.

---
Your Submission Details:
${data.subject ? `Subject: ${data.subject}\n` : ""}${data.message ? `Message:\n${data.message}\n` : ""}
---

If you have any immediate questions, simply reply to this email.

Warm regards,
The TechFusion Automata Team
https://techfusion-ventures.xyz
`;
}

/**
 * Generate HTML email template for the admin notification (to Muzi).
 */
export function generateAdminEmailHtml(data: ContactNotificationData): string {
  const { name, email, subject, message, submittedAt } = data;
  const timeFormatted = submittedAt || new Date().toUTCString();
  const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    subject ? `Re: ${subject}` : "Following up on your TechFusion Automata submission"
  )}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Sign-up / Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b0f17; width: 100% !important;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          <!-- Top Alert Accent Bar -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899); line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>
          <!-- Header -->
          <tr>
            <td style="padding: 24px 32px; border-bottom: 1px solid #1f2937; background-color: #141c2e;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; color: #f59e0b; background-color: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 4px 8px; border-radius: 6px;">
                      ACTION REQUIRED &bull; NEW SIGN-UP
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-size: 12px; color: #64748b;">${timeFormatted}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #ffffff;">
                Someone signed up on the site and deserves a reply
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.5; color: #94a3b8;">
                A new user has submitted their information on the TechFusion Automata website. Below are the submission details:
              </p>

              <!-- Lead Details Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #1a2234; border: 1px solid #2d3748; border-radius: 12px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="6" border="0">
                      <tr>
                        <td width="100" style="vertical-align: top; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Name:</td>
                        <td style="vertical-align: top; font-size: 15px; font-weight: 600; color: #ffffff;">${escapeHtml(name)}</td>
                      </tr>
                      <tr>
                        <td width="100" style="vertical-align: top; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Email:</td>
                        <td style="vertical-align: top; font-size: 14px; font-weight: 500; color: #38bdf8;">
                          <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: underline;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                      ${subject ? `
                      <tr>
                        <td width="100" style="vertical-align: top; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Subject:</td>
                        <td style="vertical-align: top; font-size: 14px; color: #e2e8f0;">${escapeHtml(subject)}</td>
                      </tr>` : ""}
                      ${message ? `
                      <tr>
                        <td width="100" style="vertical-align: top; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message:</td>
                        <td style="vertical-align: top; font-size: 14px; color: #cbd5e1; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Reply Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto 24px auto;">
                <tr>
                  <td align="center" style="border-radius: 8px; background-color: #38bdf8;">
                    <a href="${mailtoLink}" style="display: inline-block; padding: 14px 28px; font-size: 14px; font-weight: 600; color: #0b0f17; text-decoration: none; border-radius: 8px;">
                      Reply to ${escapeHtml(name)} (${escapeHtml(email)}) &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 12px; color: #64748b; text-align: center;">
                Tip: You can also hit &ldquo;Reply&rdquo; directly in your email client to respond to this lead.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0d131f; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #475569;">
                TechFusion Automata Notification Dispatcher &bull; <a href="https://techfusion-ventures.xyz" style="color: #64748b; text-decoration: none;">techfusion-ventures.xyz</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generate plain text for admin notification.
 */
export function generateAdminEmailText(data: ContactNotificationData): string {
  const { name, email, subject, message, submittedAt } = data;
  return `[ACTION REQUIRED] Someone signed up on the site and deserves a reply.

Lead Information:
----------------------------------------
Name:         ${name}
Email:        ${email}
Subject:      ${subject || "N/A"}
Submitted At: ${submittedAt || new Date().toISOString()}

Message:
${message || "No message provided"}
----------------------------------------

You can reply directly to ${email} by replying to this email.
`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Helper to dispatch email via Resend HTTP API.
 */
async function sendViaResend(params: {
  apiKey: string;
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}) {
  const recipients = Array.isArray(params.to) ? params.to : [params.to];
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: recipients,
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
      text: params.text,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Resend API error (${res.status}): ${errorText}`);
  }

  return await res.json();
}

/**
 * Helper to dispatch email via SMTP (Nodemailer).
 */
async function sendViaSmtp(params: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}) {
  // Support Namecheap Private Email (mail.privateemail.com) as default host for private domains
  const host =
    process.env.SMTP_HOST ||
    (process.env.SMTP_USER?.includes("@gmail.com") ? "smtp.gmail.com" : "mail.privateemail.com");
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("Missing SMTP credentials (SMTP_USER / SMTP_PASS)");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED === "true",
    },
  });

  return await transporter.sendMail({
    from: params.from,
    to: params.to,
    replyTo: params.replyTo,
    subject: params.subject,
    html: params.html,
    text: params.text,
  });
}

/**
 * Dispatches both notification emails:
 * 1. To the user confirming we received their submission and will be in contact soon.
 * 2. To Muzi (admin) notifying that someone signed up and deserves a reply.
 */
export async function sendLeadNotificationEmails(
  data: ContactNotificationData
): Promise<EmailDispatchResult> {
  const errors: string[] = [];
  let userEmailSent = false;
  let adminEmailSent = false;

  const resendApiKey = process.env.RESEND_API_KEY;
  const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

  const userHtml = generateUserEmailHtml(data);
  const userText = generateUserEmailText(data);
  const adminHtml = generateAdminEmailHtml(data);
  const adminText = generateAdminEmailText(data);

  const adminEmails = getAdminEmails();
  const senderEmail = getSenderEmail();
  const primaryAdmin = adminEmails[0] || "muzikhuzwayo@techfusion-ventures.xyz";

  // If no credentials configured yet, simulate safely with full observability
  if (!resendApiKey && !hasSmtp) {
    console.warn(
      "[EmailService] Neither RESEND_API_KEY nor SMTP credentials (SMTP_USER, SMTP_PASS) are configured."
    );
    console.log(`[EmailService:Simulated] Email to User (${data.email}):\nSubject: We received your message | TechFusion Automata\nBody: We will be in contact soon.`);
    console.log(`[EmailService:Simulated] Email to Admin (${adminEmails.join(", ")}):\nSubject: New Lead: ${data.name} deserves a reply\nUser Email: ${data.email}\nMessage: ${data.message || ""}`);

    return {
      userEmailSent: true,
      adminEmailSent: true,
      simulated: true,
    };
  }

  // Send to User
  try {
    if (resendApiKey) {
      await sendViaResend({
        apiKey: resendApiKey,
        from: senderEmail,
        to: data.email,
        replyTo: primaryAdmin,
        subject: "We received your message | TechFusion Automata",
        html: userHtml,
        text: userText,
      });
    } else {
      await sendViaSmtp({
        from: senderEmail,
        to: data.email,
        replyTo: primaryAdmin,
        subject: "We received your message | TechFusion Automata",
        html: userHtml,
        text: userText,
      });
    }
    userEmailSent = true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[EmailService] Failed to send confirmation email to user:", msg);
    errors.push(`User notification failed: ${msg}`);
  }

  // Send to Admin
  try {
    const adminSubject = `New Sign-up: ${data.name} (${data.email}) deserves a reply`;
    if (resendApiKey) {
      await sendViaResend({
        apiKey: resendApiKey,
        from: senderEmail,
        to: adminEmails,
        replyTo: data.email,
        subject: adminSubject,
        html: adminHtml,
        text: adminText,
      });
    } else {
      await sendViaSmtp({
        from: senderEmail,
        to: adminEmails,
        replyTo: data.email,
        subject: adminSubject,
        html: adminHtml,
        text: adminText,
      });
    }
    adminEmailSent = true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[EmailService] Failed to send notification email to admin:", msg);
    errors.push(`Admin notification failed: ${msg}`);
  }

  return {
    userEmailSent,
    adminEmailSent,
    errors: errors.length > 0 ? errors : undefined,
  };
}
