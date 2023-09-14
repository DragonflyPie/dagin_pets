import { WhatsApp, Telegram, Phone } from "./icons";
const MessengersMenu = () => {
  return (
    <ul className="flex gap-6">
      <li className="cursor-pointer transition-transform duration-300 hover:scale-110">
        <a href="tel:+971585441452">
          <Phone />
        </a>
      </li>
      <li className="cursor-pointer duration-300 hover:scale-110">
        <a href="https://wa.me/send?phone=971585441452" target="_blank">
          <WhatsApp />
        </a>
      </li>
      <li className="cursor-pointer duration-300 hover:scale-110">
        <a href="https://t.me/AnastasiaBelykh" target="_blank">
          <Telegram />
        </a>
      </li>
    </ul>
  );
};

export default MessengersMenu;
