import { Listbox } from "@headlessui/react";
import { useController, UseControllerProps } from "react-hook-form";
import { Down } from "../commons/icons";

interface DropdownProps
  extends UseControllerProps<StepTwoData, "contactMethod"> {
  dropDownOptions: Option[];
  placeholder?: string;
  label: string;
}

const MethodSelect = (props: DropdownProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController(props);

  const isPlaceholder = !value.label && props.placeholder;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="#contactMethod">{props.label}</label>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className={`relative inline-flex h-12 w-full appearance-none items-center justify-start border px-4 py-3 shadow
       ${error ? "border-red-error" : "border-gray-300"} 
       ${open ? "rounded-t-lg" : "rounded-lg"}
        `}
              >
                <span className={`${isPlaceholder ? "text-gray-form" : ""}`}>
                  {isPlaceholder ? props.placeholder : value.label}
                </span>
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
                        className={` cursor-pointer px-4 py-2 
                          ${active ? "bg-blue-light " : ""}
                          `}
                      >
                        {option.label}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              {error && (
                <p className="absolute -bottom-5 right-0 text-xs text-red-error">
                  {error.message}
                </p>
              )}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MethodSelect;
