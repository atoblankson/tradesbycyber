/**
 * Contact configuration and WhatsApp pre-filled chat link helper.
 */

// TODO: client to confirm number
export const WHATSAPP_NUMBER = "233509357336";

export const MESSAGES = {
  cta: "Hi, I just came across your website and I'd like to book a call about trading with you. What are the next steps?",
  program: "Hi, I'm interested in the Full Trader Development Program. Is there space in the next cohort, and how do I enrol?",
  elite: "Hi, I'd like to apply for the Elite Mentorship. Can we set up a call to talk about it?",
  general: "Hi, I'd like to book a call. When are you available?",
} as const;

export type MessageLocation = keyof typeof MESSAGES;

/**
 * Generates a pre-filled WhatsApp click-to-chat URL.
 * Format: https://wa.me/{WHATSAPP_NUMBER}?text={encodeURIComponent(message)}
 *
 * @param location - Key of MESSAGES ('cta' | 'program' | 'elite' | 'general') or custom message string
 * @returns Fully formatted WhatsApp URL
 */
export function getWhatsAppUrl(location: MessageLocation | string = "general"): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const message =
    location in MESSAGES
      ? MESSAGES[location as MessageLocation]
      : location;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
