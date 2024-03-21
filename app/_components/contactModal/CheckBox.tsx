import { CheckIcon } from "../commons/icons";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CheckBoxProps {
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  label: string;
  policy: string;
}

const Checkbox = ({ policy, label, register, error }: CheckBoxProps) => {
  return (
    <div className="relative flex w-full items-center justify-between gap-3 px-1 font-medium">
      <input
        type="checkbox"
        {...register}
        className={`peer h-5 w-5 shrink-0 appearance-none rounded-md border  checked:bg-honeycomb-default  focus:ring-gray-form 
       ${error ? "border-red-error" : "border-[#d0d5dd]"} 
        `}
      />
      <div className="pointer-events-none absolute h-5 w-5">
        <CheckIcon />
      </div>
      <label className="text-xs md:text-base ">
        {label}{" "}
        <a
          href={"/files/policy.pdf"}
          target="_blank"
          className="text-honeycomb-default underline hover:text-honeycomb-dark"
        >
          {`${policy}.`}
        </a>
      </label>
    </div>
  );
};
export default Checkbox;
