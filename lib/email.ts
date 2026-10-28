export type ContactLead = {
  name: string;
  email: string;
  phone?: string;
  propertyType: "residential" | "strata" | "commercial";
  suburb: string;
  message: string;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactEmail(lead: ContactLead): Promise<void> {
  const subject = `New roof report request — ${lead.suburb} (${lead.propertyType})`;
  const html = `
    <h2 style="font-family:sans-serif">New visual roof report request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${esc(lead.name)}</td></tr>
      <tr><td><b>Email</b></td><td>${esc(lead.email)}</td></tr>
      <tr><td><b>Phone</b></td><td>${esc(lead.phone || "—")}</td></tr>
      <tr><td><b>Property type</b></td><td>${esc(lead.propertyType)}</td></tr>
      <tr><td><b>Suburb</b></td><td>${esc(lead.suburb)}</td></tr>
      <tr><td><b>Message</b></td><td>${esc(lead.message)}</td></tr>
    </table>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV === "production") throw new Error("RESEND_API_KEY missing");
    console.info("[dev email]", { to: "admin@metaroofers.com", subject, html });
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? "Meta Roofing Website <leads@metaroofers.com>",
      to: [process.env.LEAD_INBOX ?? "admin@metaroofers.com"],
      subject,
      html,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}