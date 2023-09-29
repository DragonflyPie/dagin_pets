import Button from "./Button";

import { object, string, bool } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import useStore from "./store";
import SelectInput from "./SelectInput";
import Checkbox from "./CheckBox";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

interface StepTwoProps {
  handleClose: () => void;
}

const StepTwo = ({ handleClose }: StepTwoProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const data = useStore((state) => state.form.stepTwo);
  const stepOneData = useStore((state) => state.form.stepOne);
  const updateStepTwo = useStore((state) => state.updateStepTwo);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<StepTwo>({
    defaultValues: data,
    mode: "onBlur",
    resolver: yupResolver(stepTwoSchema),
  });

  const onBack = () => {
    const data = getValues();
    updateStepTwo(data);
    router.push("?modal=true&step=1");
  };

  const onSubmit = async (stepTwoData: StepTwo) => {
    const completeData = {
      ...stepOneData,
      ...stepTwoData,
    };
    try {
      setLoading(true);
      await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(completeData),
      });
      handleClose();
      setTimeout(() => {
        router.push("?success=true", { scroll: false });
      }, 300);
    } catch (error) {
      console.log(error);
      handleClose();
      setTimeout(() => {
        router.push("?success=false", { scroll: false });
      }, 300);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-4 pt-4 font-osans md:gap-6 md:px-14 md:pt-6"
    >
      <div className="relative flex flex-col gap-1.5">
        <label htmlFor="phone">Номер телефона</label>
        <PhoneInput
          name="phone"
          control={control}
          className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
        />
        {errors?.phone && (
          <p className="absolute -bottom-5 right-0 text-xs text-red-error">
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
          rows={3}
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
      <div className="mt-auto pb-1">
        <div className="mt-auto flex w-full justify-between gap-5">
          <div className="flex-1">
            <Button size="small" text={"Назад"} width="full" onClick={onBack} />
          </div>
          <div className="flex-1">
            <Button
              size="small"
              type="submit"
              text={"Отправить"}
              width="full"
              disabled={!isValid || loading}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
