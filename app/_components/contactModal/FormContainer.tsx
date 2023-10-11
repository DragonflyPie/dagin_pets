"use client";

import StepOne from "./StepOne";
import { useSearchParams } from "next/navigation";
import StepTwo from "./StepTwo";

interface FormContainerProps {
  handleClose: () => void;
  dictionary: {
    header: string;
    subheader: string;
    step_one: StepOne;
    step_two: StepTwo;
  };
}

const FormContainer = ({ handleClose, dictionary }: FormContainerProps) => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") as "1" | "2";

  return step === "1" ? (
    <>
      <hgroup className="flex w-full flex-col items-center pb-6 font-lato md:pb-8 2xl:pb-16">
        <h5 className="pb-3 text-2xl/[2.75rem]  font-semibold tracking-tight md:text-4xl/[44px] 2xl:pb-5">
          {dictionary.header}
        </h5>
        <p className="text-[0.815rem] text-gray-form-heading md:text-xl/[30px]">
          {dictionary.subheader}
        </p>
      </hgroup>
      <StepOne dictionary={dictionary.step_one} />
    </>
  ) : (
    <StepTwo handleClose={handleClose} dictionary={dictionary.step_two} />
  );
};

export default FormContainer;
