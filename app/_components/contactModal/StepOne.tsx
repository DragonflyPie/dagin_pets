import Button from "../commons/Button";
import FormInput from "./Input";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../zustand/store";
import { useRouter } from "next/navigation";
import SelectInput from "./AnimalSelect";

let stepOneSchema = object({
  name: string().required(),
  from: string(),
  to: string(),
  animal: object()
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
      className="flex h-full w-full flex-col gap-3 font-lato md:gap-5 md:px-14"
    >
      <FormInput
        id={"name"}
        label={`${dictionary.name}*`}
        placeholder={dictionary.name_placeholder}
        error={errors?.name}
        error_message={dictionary.error_required}
        register={{ ...register("name") }}
      />
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
