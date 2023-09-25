interface Option {
  value: string;
  label: string;
}

type Step = 1 | 2;

interface Form {
  stepOne: StepOne;
  stepTwo: StepTwo;
}

interface StepOne {
  name: string;
  from: string;
  to: string;
  animal: string;
  // name: string;
  // phone: string;
  // contactMethod: string;
}

interface StepTwo {
  phone: string;
  contactMethod: string;
  message?: string;
  terms?: boolean;
}

interface ReviewData {
  date: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  message: string;
  name: string;
  pet: string;
  image: StaticImageData;
}
