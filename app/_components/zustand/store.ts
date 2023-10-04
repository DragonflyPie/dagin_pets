import { create } from "zustand";

interface ModalState {
  updateStepOne: (data: StepOne) => void;
  updateStepTwo: (data: StepTwo) => void;
  form: Form;
}

const useStore = create<ModalState>()((set) => ({
  updateStepOne: (data) =>
    set((state) => ({
      form: {
        ...state.form,
        stepOne: data,
      },
    })),
  updateStepTwo: (data) =>
    set((state) => ({
      form: {
        ...state.form,
        stepTwo: data,
      },
    })),

  form: {
    stepOne: {
      name: "",
      from: "",
      to: "",
      animal: { value: "" },
    },
    stepTwo: {
      phone: "",
      contactMethod: {
        value: "any",
        label: "Любой",
        labelEn: "Any",
      },
      message: "",
    },
  },
}));

export default useStore;
