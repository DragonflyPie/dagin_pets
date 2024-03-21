import Button from "../commons/Button";
import FormInput from "./Input";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../zustand/store";
import { useRouter } from "next/navigation";
import SelectInput from "./StepOneSelect";

let stepOneSchema = object({
  from: string(),
  to: string(),
  animal: object()
    .shape({
      value: string().default(""),
    })
    .default({ value: "" }),
  time: object()
    .shape({
      value: string().default(""),
    })
    .default({ value: "" }),
  transfer: object()
    .shape({
      value: string().default(""),
    })
    .default({ value: "" }),
});

interface StepOneProps {
  dictionary: StepOne;
}

const StepOne = ({ dictionary }: StepOneProps) => {
  const data = useStore((state) => state.form.stepOne);
  const router = useRouter();
  const updateStepOne = useStore((state) => state.updateStepOne);

  const animalOptions: Option[] = [
    { value: "cat", label: dictionary.animal_select.cat },
    { value: "dog", label: dictionary.animal_select.dog },
    { value: "bird", label: dictionary.animal_select.bird },
    { value: "horse", label: dictionary.animal_select.horse },
    { value: "other", label: dictionary.animal_select.other },
  ];

  const timeOptions: Option[] = [
    { value: "yesterday", label: dictionary.time_select.yesterday },
    { value: "week", label: dictionary.time_select.week },
    { value: "weeks", label: dictionary.time_select.weeks },
    { value: "month", label: dictionary.time_select.month },
  ];

  const transferOptions: Option[] = [
    { value: "cargo", label: dictionary.transfer_select.cargo },
    { value: "cabin", label: dictionary.transfer_select.cabin },
    { value: "consultation", label: dictionary.transfer_select.consultation },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<StepOneData>({
    defaultValues: data,
    mode: "onTouched",
    resolver: yupResolver(stepOneSchema),
  });

  const onSubmit = (data: StepOneData) => {
    updateStepOne(data);
    router.push(`?modal=true&step=2`, { scroll: false });
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-3 font-geometria md:gap-5 md:px-14"
    >
      <div className="flex w-full gap-3 md:gap-5">
        <div className="flex-1">
          <FormInput
            id={"from"}
            label={dictionary.from}
            placeholder={dictionary.from_placeholder}
            error={errors?.from}
            error_message={errors.from?.message}
            register={{ ...register("from") }}
          />
        </div>
        <div className="flex-1">
          <FormInput
            id={"to"}
            label={dictionary.to}
            placeholder={dictionary.to_placeholder}
            error={errors?.to}
            register={{ ...register("to") }}
            error_message={errors.to?.message}
          />
        </div>
      </div>

      <SelectInput
        dropDownOptions={animalOptions}
        name={"animal"}
        placeholder={dictionary.animal_select.placeholder}
        control={control}
        label={dictionary.animal_select.label}
      />

      <SelectInput
        dropDownOptions={timeOptions}
        name={"time"}
        placeholder={dictionary.time_select.placeholder}
        control={control}
        label={dictionary.time_select.label}
      />

      <SelectInput
        dropDownOptions={transferOptions}
        name={"transfer"}
        placeholder={dictionary.transfer_select.placeholder}
        control={control}
        label={dictionary.transfer_select.label}
      />

      <div className="mt-auto pb-1">
        <Button
          size="small"
          type="submit"
          text={dictionary.next}
          width="full"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};

export default StepOne;
