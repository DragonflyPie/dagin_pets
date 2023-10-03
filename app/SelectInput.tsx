import { Listbox } from "@headlessui/react";
import { FieldError, useController, UseControllerProps } from "react-hook-form";
import { Down } from "./components/icons";

interface DropdownProps extends UseControllerProps<any> {
  dropDownOptions: Option[];
  placeholder?: string;
  error?: FieldError | undefined;
}

const SelectInput = (props: DropdownProps) => {
  const {
    field: { value, onChange, onBlur, name },
  } = useController(props);

  const hasPlaceholder = !value && props.placeholder;

  console.log(props.error);

  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className={`relative inline-flex h-12 w-full appearance-none items-center justify-start border px-4 py-3 shadow
       ${props.error ? "border-red-error" : "border-gray-300"} 
       ${open ? "rounded-t-lg" : "rounded-lg"}
        `}
              >
                <span className="">
                  {hasPlaceholder ? props.placeholder : value.label}
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
                  <Listbox.Option key={option.value} value={option}>
                    {({ active, selected }) => (
                      <li
                        className={` cursor-pointer px-4 py-2 
                          ${active ? "bg-gray-100 " : ""}
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
