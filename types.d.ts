interface Option {
  value: string;
  label?: string;
}

type Step = 1 | 2;

interface Form {
  stepOne: StepOneData;
  stepTwo: StepTwoData;
}

interface CompleteData extends StepOneData, StepTwoData {}

interface StepOneData {
  name: string;
  from?: string;
  to?: string;
  animal: Option;
}

interface StepTwoData {
  phone: string;
  contactMethod: Option;
  message?: string;
  terms?: boolean;
}

interface ReviewData {
  date: string;
  rating: number;
  message: string;
  name: string;
  image: string;
}

interface StepOne {
  name: string;
  name_placeholder: string;
  from: string;
  to: string;
  from_placeholder: string;
  to_placeholder: string;
  next: string;
  error_required: string;
  animal_select: AnimalSelect;
}

interface AnimalSelect {
  label: string;
  placeholder: string;
  dog: string;
  cat: string;
  bird: string;
  horse: string;
  other: string;
}

interface StepTwo {
  phone: string;
  message_label: string;
  message_placeholder: string;
  error_limit: string;
  error_required: string;
  error_invalid: string;
  agree: string;
  agree_policy: string;
  back: string;
  submit: string;
  contact_method: ContactMethod;
}

interface ContactMethod {
  label: string;
  any: string;
  phone: string;
  whatsapp: string;
  telegram: string;
}
