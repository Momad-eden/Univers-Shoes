import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "221770000000"; // numéro admin

const WhatsAppButton = () => {
  const message = `
Bonjour 👋  
Je souhaite avoir des informations sur vos chaussures.
`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
