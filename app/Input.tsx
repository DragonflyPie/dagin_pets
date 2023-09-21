import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  id: string;
  // value: string;
  label: string;
  placeholder: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  type?: string;
  maxLength?: number;
}

const FormInput = ({
  id,
  // value,
  placeholder,
  // onChange,
  label,
  maxLength,

  error,
  register,
  type = "text",
}: FormInputProps) => {
  return (
    <div className="relative flex  flex-col gap-1.5">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        {...register}
        type={type}
        maxLength={maxLength}
        // required
        // value={value}
        // onChange={onChange}
        className={`inline-flex h-12 items-center justify-start rounded-lg border px-4  py-3 shadow  placeholder:text-gray-form
        
       ${error ? "border-red-error outline-none" : "border-gray-300"} 
        `}
      ></input>
      {error && (
        <p className="text-red-error absolute -bottom-5 right-0 text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
