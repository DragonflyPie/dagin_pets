import Link from "next/link";

const NavMenu = ({ top }: { top: boolean }) => {
  return (
    <ul
      className={`gap-4  xl:gap-12
    ${!top ? " grid grid-flow-col grid-rows-3   xl:flex" : "flex justify-end"}
    
    `}
    >
      {!top && (
        <li className="cursor-pointer  underline-offset-2 hover:underline">
          <Link href={"#welcome"} className="whitespace-nowrap">
            Главная
          </Link>
        </li>
      )}
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#services"} className="whitespace-nowrap">
          Услуги
        </Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#about"} className="whitespace-nowrap">
          О компании
        </Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"} className="whitespace-nowrap">
          Отзывы
        </Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"} className="whitespace-nowrap">
          Часто задаваемые вопросы
        </Link>
      </li>

      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"} className="whitespace-nowrap">
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
