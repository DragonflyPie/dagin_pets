import { Listbox } from "@headlessui/react";
import {
  FieldError,
  useController,
  UseControllerProps,
  FieldValue,
} from "react-hook-form";
import { Down } from "./components/icons";

interface DropdownProps extends UseControllerProps<StepTwo, "contactMethod"> {
  dropDownOptions: Option[];
  placeholder?: string;
  error?: FieldError | undefined;
}

const SelectInput = (props: DropdownProps) => {
  const {
    field: { value, onChange, onBlur },
  } = useController(props);

  const isPlaceholder = value?.label && props.placeholder;

  console.log(props.error);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="contactMethod">Способ связи</label>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                // onBlur={onBlur}
                className={`relative inline-flex h-12 w-full appearance-none items-center justify-start border px-4 py-3 shadow
       ${props.error ? "border-red-error" : "border-gray-300"} 
       ${open ? "rounded-t-lg" : "rounded-lg"}
        `}
              >
                <span>{value?.label}</span>
                <span
                  className={`ml-auto transition-all duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <Down />
                </span>
              </Listbox.Button>
              <Listbox.Options
                onBlur={onBlur}
                className={
                  "absolute z-10 w-full rounded-b-lg border border-gray-300 bg-white  shadow"
                }
              >
                {props.dropDownOptions.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    onChange={onChange}
                  >
                    {({ active }) => (
                      <li
                        className={`cursor-pointer px-4 py-2 
                          ${active ? "bg-blue-light" : ""}
                          `}
                      >
                        {option.label}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              {props.error && (
                <p className="absolute -bottom-5 right-0 text-xs text-red-error">
                  {props.error.message}
                </p>
              )}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectInput;
