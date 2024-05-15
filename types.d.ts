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
  from?: string;
  to?: string;
  animal: Option;
  time: Option;
  transfer: Option;
}

interface StepTwoData {
  name: string;
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

interface StoryData {
  date: string;
  name: string;
  image: string;
  text: string;
  adopted: boolean;
}

interface StepOne {
  from: string;
  to: string;
  from_placeholder: string;
  to_placeholder: string;
  next: string;
  error_required: string;
  animal_select: AnimalSelect;
  time_select: TimeSelect;
  transfer_select: TransferSelect;
}

interface StepTwo {
  name: string;
  name_placeholder: string;
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

interface AnimalSelect {
  label: string;
  placeholder: string;
  dog: string;
  cat: string;
  bird: string;
  horse: string;
  other: string;
}

interface TimeSelect {
  label: string;
  placeholder: string;
  yesterday: string;
  week: string;
  weeks: string;
  month: string;
}

interface TransferSelect {
  label: string;
  placeholder: string;
  cargo: string;
  cabin: string;
  consultation: string;
}

interface ContactMethod {
  label: string;
  any: string;
  phone: string;
  whatsapp: string;
  telegram: string;
}
