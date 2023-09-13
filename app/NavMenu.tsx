import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="flex justify-end gap-4  xl:gap-12">
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#welcome"}>Главная</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#services"}>Услуги</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#about"}>О компании</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"}>Часто задаваемые вопросы</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
