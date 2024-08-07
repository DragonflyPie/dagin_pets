import Messenger from "./Messenger";
import {
  Instagram,
  PhoneWhite,
  Telegram,
  TikTok,
  WhatsAppWhite,
} from "./icons";

const MessengerItems = () => {
  return (
    <>
      <Messenger
        link="https://t.me/daginpets"
        info="@daginpets"
        icon={<Telegram />}
      />
      <Messenger
        link="https://www.instagram.com/daginpets/"
        info="@daginpets"
        icon={<Instagram />}
      />
      <Messenger
        link="https://www.tiktok.com/@daginpets"
        info="@daginpets"
        icon={<TikTok />}
      />
      <Messenger
        link="https://wa.me/send?phone=971585441452"
        info="+971585441452"
        icon={<WhatsAppWhite />}
      />
      <Messenger
        blank={false}
        link="tel:+971585441452"
        info="+971585441452"
        icon={<PhoneWhite />}
      />
    </>
  );
};

export default MessengerItems;
