interface Option {
  value: string;
  label?: string;
  labelEn?: string;
}

type Step = 1 | 2;

interface Form {
  stepOne: StepOne;
  stepTwo: StepTwo;
}

interface CompleteData extends StepOne, StepTwo {}

interface StepOne {
  name: string;
  from?: string;
  to?: string;
  animal: Option;
}

interface StepTwo {
  phone: string;
  contactMethod: Option;
  message?: string;
  terms?: boolean;
}

interface ReviewData {
  date: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  message: string;
  name: string;
  image: StaticImageData;
}
