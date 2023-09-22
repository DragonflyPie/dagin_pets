import { CheckIcon } from "./components/icons";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CheckBoxProps {
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const Checkbox = ({ register, error }: CheckBoxProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-3 font-osans font-medium">
      <input
        type="checkbox"
        {...register}
        className={`peer h-5 w-5 shrink-0 appearance-none rounded-md border  checked:bg-blue-button-default focus:ring-2  focus:ring-gray-form 
       ${error ? "border-red-error" : "border-[#d0d5dd]"} 
        `}
      />
      <div className="pointer-events-none absolute h-5 w-5">
        <CheckIcon />
      </div>
      <label>
        Вы соглашаетесь с нашей дружественной{" "}
        <a
          href={"/pdfTest.pdf"}
          target="_blank"
          className="text-blue-button-default underline hover:text-blue-button-darken"
        >
          политикой конфиденциальности.
        </a>
      </label>
    </div>
  );
};
export default Checkbox;
