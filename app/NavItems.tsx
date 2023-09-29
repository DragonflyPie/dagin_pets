import Link from "next/link";

const NavItems = ({ top }: { top: boolean }) => {
  return (
    <>
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
        <Link href={"#reviews"} className="whitespace-nowrap">
          Отзывы
        </Link>
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#faq"} className="whitespace-nowrap">
          Часто задаваемые вопросы
        </Link>
      </li>

      <li className="cursor-pointer underline-offset-2 hover:underline">
        <Link href={"#footer"} className="whitespace-nowrap">
          Контакты
        </Link>
      </li>
    </>
  );
};

export default NavItems;
