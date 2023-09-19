import { useState } from "react";
import { CheckIcon } from "./icons";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex w-full items-center justify-between gap-3 font-osans font-medium">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={toggleCheck}
        className="peer h-5 w-5 shrink-0 appearance-none rounded-md border border-[#d0d5dd] checked:bg-blue-button-default focus:ring-2  focus:ring-gray-form "
      />
      <div className="pointer-events-none absolute h-5 w-5">
        <CheckIcon />
      </div>
      <label>
        Вы соглашаетесь с нашей дружественной{" "}
        <span className="text-blue-button-default underline">
          политикой конфиденциальности.
        </span>
      </label>
    </div>
  );
};
export default Checkbox;
