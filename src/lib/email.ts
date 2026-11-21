import nodemailer from "nodemailer";
import type { OfferStack } from "@/lib/offer-stacks";

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

export interface OfferStackDossierRequest {
  name: string;
  email: string;
  organization?: string;
  selectionLabel: string;
  stacks: OfferStack[];
  submittedAt?: string;
}

const THEME = {
  bg: "#0B0B0C",
  card: "#141416",
  surface: "#1E1E20",
  border: "#2A2A2E",
  foreground: "#E2E8F0",
  body: "#B8BEC8",
  muted: "#8E9196",
  emerald: "#34D399",
  fontSans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  fontMono:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
};

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
  list.add("muzikhuzwayo@techfusion-ventures.xyz");
  return Array.from(list);
}

export function getSenderEmail(): string {
  if (process.env.EMAIL_FROM) return process.env.EMAIL_FROM;
  if (process.env.SMTP_FROM) return process.env.SMTP_FROM;
  if (process.env.RESEND_FROM) return process.env.RESEND_FROM;
  if (process.env.SMTP_USER) {
    return `Techfusion Automata <${process.env.SMTP_USER}>`;
  }
  return "Techfusion Automata <muzikhuzwayo@techfusion-ventures.xyz>";
}

function renderEmailShell(params: {
  title: string;
  subtitle: string;
  bodyHtml: string;
  footerNote?: string;
  maxWidth?: number;
}): string {
  const width = params.maxWidth ?? 600;
  const footerNote =
    params.footerNote ??
    "Techfusion Automata (Pty) Ltd &middot; B-BBEE Level 1 (135%) &middot; ISO/IEC 42001 &amp; POPIA Sec 71 Aligned";

  return `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(params.title)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${THEME.bg}; font-family: ${THEME.fontSans}; color: ${THEME.foreground};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${THEME.bg}; width: 100% !important;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: ${width}px; background-color: ${THEME.card}; border: 1px solid ${THEME.border}; border-radius: 16px; overflow: hidden;">
          <tr>
            <td height="3" style="background: linear-gradient(90deg, ${THEME.foreground}, ${THEME.muted}); line-height: 3px; font-size: 3px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding: 28px 32px 22px 32px; border-bottom: 1px solid ${THEME.border};">
              <div style="font-size: 15px; font-weight: 700; letter-spacing: -0.01em; color: ${THEME.foreground};">
                Techfusion Automata
              </div>
              <div style="font-size: 12px; color: ${THEME.muted}; margin-top: 4px; font-family: ${THEME.fontMono};">
                ${params.subtitle}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              ${params.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding: 22px 32px; background-color: ${THEME.bg}; border-top: 1px solid ${THEME.border}; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: ${THEME.muted};">
                ${footerNote}
              </p>
              <p style="margin: 0; font-size: 12px; color: ${THEME.muted};">
                <a href="https://techfusion-ventures.xyz" style="color: ${THEME.foreground}; text-decoration: none;">techfusion-ventures.xyz</a>
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

export function generateUserEmailHtml(data: ContactNotificationData): string {
  const { name, subject, message } = data;
  const bodyHtml = `
    <h1 style="margin: 0 0 14px 0; font-size: 22px; font-weight: 700; color: ${THEME.foreground}; letter-spacing: -0.02em;">
      We have received your enquiry
    </h1>
    <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: ${THEME.body};">
      Dear <strong style="color: ${THEME.foreground};">${escapeHtml(name)}</strong>,
    </p>
    <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: ${THEME.body};">
      Thank you for getting in touch with Techfusion Automata. We have received your submission and a member of our team will respond shortly to discuss your requirements.
    </p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${THEME.surface}; border: 1px solid ${THEME.border}; border-radius: 12px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 20px;">
          <div style="font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 12px;">
            Enquiry Summary
          </div>
          ${
            subject
              ? `<div style="margin-bottom: 12px;">
                  <div style="font-size: 11px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 3px;">Subject</div>
                  <div style="font-size: 14px; color: ${THEME.foreground}; font-weight: 500;">${escapeHtml(subject)}</div>
                </div>`
              : ""
          }
          ${
            message
              ? `<div>
                  <div style="font-size: 11px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 3px;">Your Message</div>
                  <p style="margin: 0; font-size: 14px; color: ${THEME.body}; line-height: 1.55; white-space: pre-wrap;">${escapeHtml(message)}</p>
                </div>`
              : ""
          }
        </td>
      </tr>
    </table>

    <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: ${THEME.muted};">
      Should you wish to add any further context or attach a Terms of Reference (ToR), simply reply directly to this email.
    </p>
    <p style="margin: 24px 0 0 0; font-size: 14px; line-height: 1.6; color: ${THEME.body};">
      Kind regards,<br>
      <strong style="color: ${THEME.foreground};">Techfusion Automata (Pty) Ltd</strong>
    </p>
  `;

  return renderEmailShell({
    title: "Enquiry Received | Techfusion Automata",
    subtitle: "Private Executive Desk &middot; Johannesburg, South Africa",
    bodyHtml,
  });
}

export function generateUserEmailText(data: ContactNotificationData): string {
  return `Dear ${data.name},

Thank you for getting in touch with Techfusion Automata.

We have received your enquiry and a member of our team will respond shortly to discuss your requirements.

---
Enquiry Summary:
${data.subject ? `Subject: ${data.subject}\n` : ""}${data.message ? `Message:\n${data.message}\n` : ""}
---

Should you wish to share any additional details or a Terms of Reference (ToR), simply reply directly to this email.

Kind regards,
Techfusion Automata (Pty) Ltd
https://techfusion-ventures.xyz
`;
}

export function generateAdminEmailHtml(data: ContactNotificationData): string {
  const { name, email, subject, message, submittedAt } = data;
  const timeFormatted = submittedAt || new Date().toUTCString();
  const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    subject
      ? `Re: ${subject}`
      : "Following up on your Techfusion Automata enquiry"
  )}`;

  const bodyHtml = `
    <div style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background-color: ${THEME.surface}; border: 1px solid ${THEME.border}; font-family: ${THEME.fontMono}; font-size: 11px; color: ${THEME.emerald}; margin-bottom: 16px;">
      &bull; New Website Enquiry
    </div>
    <h1 style="margin: 0 0 10px 0; font-size: 21px; font-weight: 700; color: ${THEME.foreground}; letter-spacing: -0.02em;">
      New submission awaiting your reply
    </h1>
    <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: ${THEME.muted};">
      Received on ${escapeHtml(timeFormatted)} via techfusion-ventures.xyz.
    </p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${THEME.surface}; border: 1px solid ${THEME.border}; border-radius: 12px; margin-bottom: 28px;">
      <tr>
        <td style="padding: 20px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="6" border="0">
            <tr>
              <td width="96" style="vertical-align: top; font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted};">Name</td>
              <td style="vertical-align: top; font-size: 14px; font-weight: 600; color: ${THEME.foreground};">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td width="96" style="vertical-align: top; font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted};">Email</td>
              <td style="vertical-align: top; font-size: 14px;">
                <a href="mailto:${escapeHtml(email)}" style="color: ${THEME.foreground}; text-decoration: underline;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${
              subject
                ? `<tr>
                    <td width="96" style="vertical-align: top; font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted};">Subject</td>
                    <td style="vertical-align: top; font-size: 14px; color: ${THEME.foreground};">${escapeHtml(subject)}</td>
                  </tr>`
                : ""
            }
            ${
              message
                ? `<tr>
                    <td width="96" style="vertical-align: top; font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted};">Details</td>
                    <td style="vertical-align: top; font-size: 14px; color: ${THEME.body}; line-height: 1.55; white-space: pre-wrap;">${escapeHtml(message)}</td>
                  </tr>`
                : ""
            }
          </table>
        </td>
      </tr>
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 16px 0;">
      <tr>
        <td align="center" style="border-radius: 9999px; background-color: ${THEME.foreground};">
          <a href="${mailtoLink}" style="display: inline-block; padding: 13px 26px; font-size: 13px; font-weight: 600; color: ${THEME.bg}; text-decoration: none; border-radius: 9999px;">
            Reply to ${escapeHtml(name)} &rarr;
          </a>
        </td>
      </tr>
    </table>

    <p style="margin: 0; font-size: 12px; color: ${THEME.muted};">
      You can also reply directly to this email in your mail client.
    </p>
  `;

  return renderEmailShell({
    title: "New Website Enquiry | Techfusion Automata",
    subtitle: "Internal Notification Dispatcher",
    bodyHtml,
    footerNote: "Techfusion Automata Notification Service",
  });
}

export function generateAdminEmailText(data: ContactNotificationData): string {
  const { name, email, subject, message, submittedAt } = data;
  return `New Website Enquiry — Reply Requested

Lead Details:
----------------------------------------
Name:         ${name}
Email:        ${email}
Subject:      ${subject || "N/A"}
Submitted At: ${submittedAt || new Date().toISOString()}

Details:
${message || "No message provided"}
----------------------------------------

Reply directly to this email to respond to ${email}.
`;
}

export function generateOfferStackDossierHtml(
  req: OfferStackDossierRequest
): string {
  const stackBlocks = req.stacks
    .map((stack) => {
      const layersHtml = stack.layers
        .map(
          (layer) => `
          <div style="margin-bottom: 10px; padding: 14px 16px; background-color: ${THEME.card}; border: 1px solid ${THEME.border}; border-radius: 10px;">
            <div style="font-size: 11px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 4px;">
              ${escapeHtml(layer.tier)} &middot; <span style="color: ${THEME.foreground}; font-weight: 600;">${escapeHtml(layer.name)}</span>
            </div>
            <p style="margin: 0 0 8px 0; font-size: 13px; line-height: 1.55; color: ${THEME.muted};">
              ${escapeHtml(layer.summary)}
            </p>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px; line-height: 1.6; color: ${THEME.body};">
              ${layer.components.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
            </ul>
          </div>`
        )
        .join("");

      const deliverablesHtml = stack.deliverables
        .map((d) => `<li style="margin-bottom: 4px;">${escapeHtml(d)}</li>`)
        .join("");

      const cadenceHtml = stack.engagementModel
        .map((step) => `<li style="margin-bottom: 4px;">${escapeHtml(step)}</li>`)
        .join("");

      return `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${THEME.surface}; border: 1px solid ${THEME.border}; border-radius: 14px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 24px;">
              <div style="font-size: 11px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 6px;">
                ${escapeHtml(stack.code)} &middot; ${escapeHtml(stack.pillarLabel)}
              </div>
              <h2 style="margin: 0 0 8px 0; font-size: 19px; font-weight: 700; color: ${THEME.foreground}; letter-spacing: -0.01em;">
                ${escapeHtml(stack.title)}
              </h2>
              <p style="margin: 0 0 12px 0; font-size: 13px; line-height: 1.6; color: ${THEME.body};">
                ${escapeHtml(stack.shortSummary)}
              </p>
              <div style="margin-bottom: 18px; font-size: 12px; color: ${THEME.emerald}; font-family: ${THEME.fontMono};">
                Cognition Role: ${escapeHtml(stack.cognitionRole)}
              </div>

              <div style="font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin-bottom: 8px;">
                Three-Layer Delivery Architecture
              </div>
              ${layersHtml}

              <div style="font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin: 16px 0 6px 0;">
                Primary Deliverables &amp; Artefacts
              </div>
              <ul style="margin: 0 0 16px 0; padding-left: 18px; font-size: 13px; line-height: 1.55; color: ${THEME.body};">
                ${deliverablesHtml}
              </ul>

              <div style="font-size: 12px; font-family: ${THEME.fontMono}; color: ${THEME.muted}; margin: 0 0 6px 0;">
                Engagement Cadence
              </div>
              <ol style="margin: 0 0 16px 0; padding-left: 18px; font-size: 13px; line-height: 1.55; color: ${THEME.body};">
                ${cadenceHtml}
              </ol>

              <div style="font-size: 12px; color: ${THEME.muted}; border-top: 1px solid ${THEME.border}; padding-top: 12px;">
                <strong style="color: ${THEME.foreground};">Governance Baseline:</strong> ${escapeHtml(stack.governance.join(" · "))}
              </div>
            </td>
          </tr>
        </table>`;
    })
    .join("");

  const bodyHtml = `
    <div style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background-color: ${THEME.surface}; border: 1px solid ${THEME.border}; font-family: ${THEME.fontMono}; font-size: 11px; color: ${THEME.emerald}; margin-bottom: 16px;">
      &bull; Instant Specification Dispatch
    </div>
    <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 700; color: ${THEME.foreground}; letter-spacing: -0.02em;">
      Your Requested Offer Stack Specification
    </h1>
    <p style="margin: 0 0 14px 0; font-size: 14px; line-height: 1.6; color: ${THEME.body};">
      Dear <strong style="color: ${THEME.foreground};">${escapeHtml(req.name)}</strong>,
    </p>
    <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: ${THEME.body};">
      As requested, please find enclosed the technical specification, three-layer delivery architecture, deliverables, and governance baseline for <strong style="color: ${THEME.foreground};">${escapeHtml(req.selectionLabel)}</strong>.
    </p>

    ${stackBlocks}

    <p style="margin: 8px 0 18px 0; font-size: 14px; line-height: 1.6; color: ${THEME.muted};">
      Reply directly to this email if you would like to scope a phased implementation, align to a Terms of Reference (ToR), or request our private statutory bid pack (CIPC, SARS Tax Compliance PIN, B-BBEE Level 1 sworn affidavit, and OEM partner letters).
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px 0;">
      <tr>
        <td align="center" style="border-radius: 9999px; background-color: ${THEME.foreground};">
          <a href="https://techfusion-ventures.xyz/contact?doc=bid-pack" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 600; color: ${THEME.bg}; text-decoration: none; border-radius: 9999px;">
            Request Private Bid Pack &rarr;
          </a>
        </td>
      </tr>
    </table>

    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: ${THEME.body};">
      Kind regards,<br>
      <strong style="color: ${THEME.foreground};">Techfusion Automata (Pty) Ltd</strong><br>
      <a href="https://techfusion-ventures.xyz/architecture" style="color: ${THEME.muted}; text-decoration: none; font-size: 12px;">techfusion-ventures.xyz/architecture</a>
    </p>
  `;

  return renderEmailShell({
    title: `Specification Dossier: ${req.selectionLabel} | Techfusion Automata`,
    subtitle: "Enterprise Cognition Architecture &middot; Specification Desk",
    bodyHtml,
    maxWidth: 660,
  });
}

export function generateOfferStackDossierText(
  req: OfferStackDossierRequest
): string {
  const stackSections = req.stacks
    .map((stack) => {
      const layersText = stack.layers
        .map(
          (l) =>
            `  - ${l.tier} (${l.name}): ${l.summary}\n    Components: ${l.components.join("; ")}`
        )
        .join("\n");
      return [
        `------------------------------------------------------------`,
        `${stack.code}: ${stack.title}`,
        `Cognition Role: ${stack.cognitionRole}`,
        `Summary: ${stack.shortSummary}`,
        ``,
        `Three-Layer Delivery Architecture:`,
        layersText,
        ``,
        `Primary Deliverables & Artefacts:`,
        ...stack.deliverables.map((d) => `  * ${d}`),
        ``,
        `Engagement Cadence:`,
        ...stack.engagementModel.map((m, i) => `  0${i + 1}. ${m}`),
        ``,
        `Governance Baseline: ${stack.governance.join(" | ")}`,
      ].join("\n");
    })
    .join("\n\n");

  return `Dear ${req.name},

As requested, please find below the Techfusion Automata Offer Stack Specification for: ${req.selectionLabel}.

${stackSections}

------------------------------------------------------------
Reply directly to this email to scope a mandate, align to a Terms of Reference (ToR), or request our private statutory bid pack (CIPC, SARS, B-BBEE Level 1 sworn affidavit, and OEM partner letters).

Kind regards,
Techfusion Automata (Pty) Ltd
https://techfusion-ventures.xyz/architecture
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
      Authorization: `Bearer ${params.apiKey}`,
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

async function sendViaSmtp(params: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}) {
  const host =
    process.env.SMTP_HOST ||
    (process.env.SMTP_USER?.includes("@gmail.com")
      ? "smtp.gmail.com"
      : "mail.privateemail.com");
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465;
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

  if (!resendApiKey && !hasSmtp) {
    console.warn(
      "[EmailService] Neither RESEND_API_KEY nor SMTP credentials (SMTP_USER, SMTP_PASS) are configured."
    );
    console.log(
      `[EmailService:Simulated] User (${data.email}) | Subject: We have received your enquiry | Techfusion Automata`
    );
    console.log(
      `[EmailService:Simulated] Admin (${adminEmails.join(", ")}) | Lead: ${data.name} (${data.email})`
    );

    return {
      userEmailSent: true,
      adminEmailSent: true,
      simulated: true,
    };
  }

  try {
    if (resendApiKey) {
      await sendViaResend({
        apiKey: resendApiKey,
        from: senderEmail,
        to: data.email,
        replyTo: primaryAdmin,
        subject: "We have received your enquiry | Techfusion Automata",
        html: userHtml,
        text: userText,
      });
    } else {
      await sendViaSmtp({
        from: senderEmail,
        to: data.email,
        replyTo: primaryAdmin,
        subject: "We have received your enquiry | Techfusion Automata",
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

  try {
    const adminSubject = `New Enquiry: ${data.name} (${data.email})`;
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

export async function sendOfferStackDossierEmails(
  req: OfferStackDossierRequest
): Promise<EmailDispatchResult> {
  const errors: string[] = [];
  let userEmailSent = false;
  let adminEmailSent = false;

  const resendApiKey = process.env.RESEND_API_KEY;
  const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

  const userSubject = `Specification Dossier: ${req.selectionLabel} | Techfusion Automata`;
  const userHtml = generateOfferStackDossierHtml(req);
  const userText = generateOfferStackDossierText(req);

  const adminMessage = [
    `Requested Dossier: ${req.selectionLabel} (${req.stacks.length} stack${req.stacks.length === 1 ? "" : "s"})`,
    req.organization ? `Organisation: ${req.organization}` : null,
    `Full specification dispatched immediately to ${req.email}.`,
  ]
    .filter(Boolean)
    .join("\n");

  const adminData: ContactNotificationData = {
    name: req.name,
    email: req.email,
    subject: `Offer Stack Dossier Request: ${req.selectionLabel}`,
    message: adminMessage,
    submittedAt: req.submittedAt,
  };
  const adminHtml = generateAdminEmailHtml(adminData);
  const adminText = generateAdminEmailText(adminData);

  const adminEmails = getAdminEmails();
  const senderEmail = getSenderEmail();
  const primaryAdmin = adminEmails[0] || "muzikhuzwayo@techfusion-ventures.xyz";

  if (!resendApiKey && !hasSmtp) {
    console.warn(
      "[EmailService] Neither RESEND_API_KEY nor SMTP credentials are configured. Simulating instant dossier dispatch."
    );
    console.log(
      `[EmailService:Simulated] Dossier Email to ${req.email} | Subject: ${userSubject} | Stacks: ${req.stacks.map((s) => s.code).join(", ")}`
    );
    return {
      userEmailSent: true,
      adminEmailSent: true,
      simulated: true,
    };
  }

  try {
    if (resendApiKey) {
      await sendViaResend({
        apiKey: resendApiKey,
        from: senderEmail,
        to: req.email,
        replyTo: primaryAdmin,
        subject: userSubject,
        html: userHtml,
        text: userText,
      });
    } else {
      await sendViaSmtp({
        from: senderEmail,
        to: req.email,
        replyTo: primaryAdmin,
        subject: userSubject,
        html: userHtml,
        text: userText,
      });
    }
    userEmailSent = true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[EmailService] Failed to dispatch dossier email to user:", msg);
    errors.push(`User dossier dispatch failed: ${msg}`);
  }

  try {
    const adminSubject = `Dossier Requested: ${req.selectionLabel} — ${req.name} (${req.email})`;
    if (resendApiKey) {
      await sendViaResend({
        apiKey: resendApiKey,
        from: senderEmail,
        to: adminEmails,
        replyTo: req.email,
        subject: adminSubject,
        html: adminHtml,
        text: adminText,
      });
    } else {
      await sendViaSmtp({
        from: senderEmail,
        to: adminEmails,
        replyTo: req.email,
        subject: adminSubject,
        html: adminHtml,
        text: adminText,
      });
    }
    adminEmailSent = true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[EmailService] Failed to send admin dossier alert:", msg);
    errors.push(`Admin notification failed: ${msg}`);
  }

  return {
    userEmailSent,
    adminEmailSent,
    errors: errors.length > 0 ? errors : undefined,
  };
}
