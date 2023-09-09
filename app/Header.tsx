import Image from "next/image";
import logo from "../public/logo_with_text.png";

const Header = () => {
  return (
    <nav>
      <Image src={logo} alt={"DaginPets Logo"} width={120} />
    </nav>
  );
};

export default Header;
