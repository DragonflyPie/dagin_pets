import Link from "next/link";

const NavMenu = ({ top }: { top: boolean }) => {
  return (
    <ul
      className={`justify-end gap-4  xl:gap-12
    ${!top ? "grid grid-cols-2 md:flex" : "flex"}
    
    `}
    >
      {!top && (
        <li className="cursor-pointer underline-offset-2 hover:underline">
          <Link href={"#welcome"}>Главная</Link>
        </li>
      )}
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#services"}>Услуги</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#about"}>О компании</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"}>Отзывы</Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"}>Часто задаваемые вопросы</Link>
      </li>

      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"}>Контакты</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
