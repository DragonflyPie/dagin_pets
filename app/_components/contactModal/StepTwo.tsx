import { object, string, bool } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Checkbox from "./CheckBox";
import Button from "../commons/Button";
import useStore from "../zustand/store";
import MethodSelect from "./MethodSelect";
import FormInput from "./Input";
// import { FbSendFormEvent } from "@/app/_utilities/metrics/pixelFuncs";

let stepTwoSchema = object({
  name: string().required(),
  email: string(),
  phone: string()
    .required("This field is required")
    .min(10, "Invalid phone number")
    .max(18, "Invalid phone number"),
  contactMethod: object()
    .shape({
      value: string().default(""),
    })
    .default({ value: "" }),
  message: string(),
  terms: bool().oneOf([true], "Accept is required"),
});

interface StepTwoProps {
  handleClose: () => void;
  dictionary: StepTwo;
}

const StepTwo = ({ handleClose, dictionary }: StepTwoProps) => {
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
    formState: { errors, isValid },
  } = useForm<StepTwoData>({
    defaultValues: data,
    mode: "onBlur",
    resolver: yupResolver(stepTwoSchema),
  });

  const contactOptions: Option[] = [
    { value: "any", label: dictionary.contact_method.any },
    { value: "phone", label: dictionary.contact_method.phone },
    { value: "whatsApp", label: dictionary.contact_method.whatsapp },
    { value: "telegram", label: dictionary.contact_method.telegram },
  ];

  const onBack = () => {
    const data = getValues();
    updateStepTwo(data);
    router.push("?modal=true&step=1", { scroll: false });
  };

  const onSubmit = async (stepTwoData: StepTwoData) => {
    const completeData = {
      ...stepOneData,
      ...stepTwoData,
    };
    try {
      setLoading(true);
      // FbSendFormEvent();
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(completeData),
      });
      if (!res.ok) throw new Error("Server error");

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
      className="flex w-full flex-col gap-3 pt-4 font-raleway md:gap-4 md:px-14 md:pt-0"
    >
      <FormInput
        id={"name"}
        label={`${dictionary.name}*`}
        placeholder={dictionary.name_placeholder}
        error={errors?.name}
        error_message={dictionary.error_required}
        register={{ ...register("name") }}
      />
      <FormInput
        id={"email"}
        label={`${dictionary.email}`}
        placeholder={dictionary.email_placeholder}
        error={errors?.email}
        error_message={dictionary.error_required}
        register={{ ...register("email") }}
        type="email"
      />
      <div className="relative flex flex-col gap-1.5">
        <label
          className="font-geometria font-medium"
          htmlFor="phone"
        >{`${dictionary.phone}*`}</label>
        <PhoneInput
          name="phone"
          control={control}
          className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
        />
        {errors?.phone && (
          <p className="absolute -bottom-5 right-0 text-xs text-red-error">
            {}
            {errors.phone.type === "required"
              ? dictionary.error_required
              : dictionary.error_invalid}
          </p>
        )}
      </div>

      <MethodSelect
        control={control}
        name="contactMethod"
        dropDownOptions={contactOptions}
        label={dictionary.contact_method.label}
        placeholder={contactOptions[0].label}
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="font-geometria font-medium">
          {dictionary.message_label}
        </label>
        <textarea
          maxLength={250}
          rows={3}
          id="message"
          {...register("message")}
          placeholder={dictionary.message_placeholder}
          className="inline-flex items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
        ></textarea>
        <p className="ml-auto text-[0.6rem]/[12px] font-light">
          {dictionary.error_limit}
        </p>
      </div>
      <Checkbox
        register={{ ...register("terms") }}
        error={errors?.terms}
        label={dictionary.agree}
        policy={dictionary.agree_policy}
      />
      <div className="mt-auto pb-1">
        <div className="mt-auto flex w-full justify-between gap-5">
          <div className="flex-1">
            <Button
              size="small"
              text={dictionary.back}
              width="full"
              onClick={onBack}
            />
          </div>
          <div className="flex-1">
            <Button
              size="small"
              type="submit"
              text={dictionary.submit}
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
