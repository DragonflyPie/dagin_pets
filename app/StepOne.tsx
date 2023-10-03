import Button from "./Button";
import FormInput from "./Input";

import { object, string } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "./store";
import { useRouter } from "next/navigation";
import SelectInput from "./SelectInput";

const animalOptions: Option[] = [
  { value: "cat", label: "Кошка", labelEn: "Cat" },
  { value: "dog", label: "Собака" },
  { value: "other", label: "Другое животное" },
];

let stepOneSchema = object({
  name: string().required("This field is required"),
  from: string().required("This field is required"),
  to: string().required("This field is required"),
  animal: object()
    .shape({
      value: string().required("This field is required"),
    })
    .required("This field is required"),
});

const StepOne = () => {
  const data = useStore((state) => state.form.stepOne);
  const router = useRouter();

  const updateStepOne = useStore((state) => state.updateStepOne);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<StepOne>({
    defaultValues: data,
    mode: "onBlur",
    resolver: yupResolver(stepOneSchema),
  });

  // useEffect(() => {
  //   localStorage.setItem("FORM_DATA", JSON.stringify(formState));
  // }, [FormData]);

  const onSubmit = (data: StepOne) => {
    updateStepOne(data);
    router.push(`?modal=true&step=2`);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-3 font-osans md:gap-5 md:px-14"
    >
      <FormInput
        id={"name"}
        label={"Ваше имя"}
        placeholder={"Введите Имя"}
        error={errors?.name}
        register={{ ...register("name") }}
      />
      <div className="flex w-full gap-3 md:gap-5">
        <div className="flex-1">
          <FormInput
            id={"from"}
            label={"Откуда"}
            placeholder={"Выберите"}
            error={errors?.from}
            register={{ ...register("from") }}
          />
        </div>
        <div className="flex-1">
          <FormInput
            id={"to"}
            label={"Куда"}
            placeholder={"Выберите"}
            error={errors?.to}
            register={{ ...register("to") }}
          />
        </div>
      </div>

      <SelectInput
        dropDownOptions={animalOptions}
        name={"animal"}
        placeholder={"Кого везти"}
        control={control}
        error={errors.animal?.value}
      />
      {/* <SelectInput
        id={"animal"}
        label={"Кого везти"}
        error={errors?.animal}
        register={{ ...register("animal") }}
        options={animalOptions}
      /> */}

      <div className="mt-auto pb-1">
        <Button
          size="small"
          type="submit"
          text={"Далее"}
          width="full"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};

export default StepOne;

{
  /* 
        <Controller
          name="phone"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <PatternFormat
              format="+#(###)###-####"
              placeholder="+7(900)000-0000"
              mask="_"
              getInputRef={ref}
              {...rest}
              className="inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            />
          )}
        /> */
}

{
  /* </div> */
}

// const getInitialValues = () => {
//   const data = use
//     ? (JSON.parse(data) as StepOne)
//     : {
//         name: "",
//         phone: "",
//         contactMethod: "",
//       };
// };
