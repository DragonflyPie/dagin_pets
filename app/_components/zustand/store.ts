import { create } from "zustand";

interface ModalState {
  updateStepOne: (data: StepOneData) => void;
  updateStepTwo: (data: StepTwoData) => void;
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
      animal: { value: "" },
      time: { value: "" },
      transfer: { value: "" },
    },
    stepTwo: {
      name: "",
      phone: "",
      contactMethod: {
        value: "",
      },
    },
  },
}));

export default useStore;
