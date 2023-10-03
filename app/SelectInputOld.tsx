import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface SelectInputProps {
  id: string;
  label: string;
  placeholder?: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  options: Option[];
}

const FormInput = ({
  id,
  placeholder,
  label,
  error,
  register,
  options,
}: SelectInputProps) => {
  return (
    <div className="relative  flex flex-col gap-1.5">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        {...register}
        // required
        // value={value}
        // onChange={onChange}

        className={`relative inline-flex h-12 w-full appearance-none items-center justify-start  rounded-lg border px-4 py-3 shadow
       ${error ? "border-red-error" : "border-gray-300"} 
        
        `}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="absolute -bottom-5 right-0 text-xs text-red-error">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
