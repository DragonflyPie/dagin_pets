const NavMenu = () => {
  return (
    <ul className="flex justify-end gap-4  xl:gap-12">
      <li className="cursor-pointer underline-offset-2 hover:underline">
        Главная
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        Услуги
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        О компании
      </li>
      <li className="cursor-pointer underline-offset-2 hover:underline">
        Часто задаваемые вопросы
      </li>
    </ul>
  );
};

export default NavMenu;
