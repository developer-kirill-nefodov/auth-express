export const paramsSMTP = (email, html, text, subject, fromEmail, fromName, replyTo, attachments = []) => {
  return {
    from: `${fromName} <${fromEmail}>`,
    to: email,
    replyTo,
    text,
    subject,
    html,
    attachments
  }
}