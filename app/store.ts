import { create } from "zustand";

interface ModalState {
  // isOpen: boolean;
  // step: Step;
  // closeModal: () => void;
  // openModal: () => void;
  // nextStep: () => void;
  // previousStep: () => void;
  updateStepOne: (data: StepOne) => void;
  updateStepTwo: (data: StepTwo) => void;
  form: Form;
}

const useStore = create<ModalState>()((set) => ({
  // isOpen: false,
  // closeModal: () => set((state) => ({ isOpen: false })),
  // openModal: () => set((state) => ({ isOpen: true })),
  // nextStep: () => set((state) => ({ step: 2 })),
  // previousStep: () => set((state) => ({ step: 1 })),
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
