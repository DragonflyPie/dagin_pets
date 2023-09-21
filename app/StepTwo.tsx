import Button from "./Button";

import { object, string, number, date, InferType, bool, boolean } from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import useStore from "./store";
import SelectInput from "./SelectInput";
import Checkbox from "./CheckBox";

const contactOptions: Option[] = [
  { value: "any", label: "Любой" },
  { value: "phone", label: "Телефон" },
  { value: "whatsApp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
];

let stepTwoSchema = object({
  phone: string()
    .required("This field is required")
    .min(10, "Invalid phone number")
    .max(18, "Invalid phone number"),
  contactMethod: string().required("This field is required"),
  message: string(),
  terms: bool().oneOf([true], "Accept Ts & Cs is required"),
});

const StepTwo = () => {
  const data = useStore((state) => state.form.stepTwo);
  const previousStep = useStore((state) => state.previousStep);
  const updateStepTwo = useStore((state) => state.updateStepTwo);
  const completeForm = useStore((state) => state.form.stepOne);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<StepTwo>({
    defaultValues: data,
    mode: "onBlur",
    resolver: yupResolver(stepTwoSchema),
  });

  const onSubmit = async (data: StepTwo) => {
    const completeData = {
      ...completeForm,
      ...data,
    };
    console.log(completeData);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-6 px-14 pt-6 font-osans"
    >
      <div className="relative flex flex-col gap-1.5">
        <label htmlFor="phone">Номер телефона</label>
        <PhoneInput
          name="phone"
          control={control}
          className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
        />
        {errors?.phone && (
          <p className="text-red-error absolute -bottom-5 right-0 text-xs">
            {errors.phone.message}
          </p>
        )}
      </div>
      <SelectInput
        id={"contactMethod"}
        label={"Способ связи"}
        error={errors?.contactMethod}
        register={{ ...register("contactMethod") }}
        options={contactOptions}
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone">Сообщение</label>
        <textarea
          maxLength={250}
          rows={4}
          id="message"
          {...register("message")}
          placeholder="Введите сообщение"
          className="inline-flex items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
        ></textarea>
        <p className="ml-auto font-lato text-[0.6rem]/[12px] font-light">
          Максимум 250 символов
        </p>
      </div>
      <Checkbox register={{ ...register("terms") }} error={errors?.terms} />
      <div className="mt-auto"></div>

      <div className="mt-auto flex w-full justify-between gap-5">
        <div className="flex-1">
          <Button
            radius="small"
            size="small"
            onClick={previousStep}
            text={"Назад"}
            width="full"
          />
        </div>
        <div className="flex-1">
          <Button
            radius="small"
            size="small"
            type="submit"
            text={"Отправить"}
            width="full"
            disabled={!isDirty || !isValid}
          />
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
