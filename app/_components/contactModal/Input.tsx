import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  type?: string;
  maxLength?: number;
  error_message?: string;
}

const FormInput = ({
  id,
  placeholder,
  label,
  maxLength,
  error,
  error_message,
  register,
  type = "text",
}: FormInputProps) => {
  return (
    <div className="relative flex w-full flex-col gap-1.5">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        {...register}
        type={type}
        maxLength={maxLength}
        className={`inline-flex h-12 w-full items-center justify-start rounded-lg border px-4  py-3 shadow  placeholder:text-gray-form
        
       ${error ? "border-red-error outline-none" : "border-gray-300"} 
        `}
      ></input>
      {error && (
        <p className="absolute -bottom-5 right-0 text-xs text-red-error">
          {error_message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
