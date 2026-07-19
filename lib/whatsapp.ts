/**
 * Builds a WhatsApp deep link using the configured business number.
 * Mirrors the pattern already used in the health campaign components so there is
 * a single source of truth for how we open WhatsApp conversations.
 */
export function getWhatsAppUrl(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const base = phone ? `https://wa.me/${phone}` : "https://wa.me/";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
