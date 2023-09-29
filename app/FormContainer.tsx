"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useSearchParams } from "next/navigation";

interface FormContainerProps {
  handleClose: () => void;
}

const FormContainer = ({ handleClose }: FormContainerProps) => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") as "1" | "2";

  return step === "1" ? (
    <>
      <hgroup className="flex w-full flex-col items-center pb-6 font-lato md:pb-8 2xl:pb-16">
        {/* <p className="pb-3 text-base font-semibold text-blue-button-default">
          Связаться с нами
        </p> */}
        <h5 className="pb-3 text-2xl/[2.75rem]  font-semibold tracking-tight md:text-4xl/[44px] 2xl:pb-5">
          Связаться с нами
        </h5>
        <p className="text-[0.815rem] text-gray-form-heading md:text-xl/[30px]">
          Заполните данные и мы Вам ответим
        </p>
      </hgroup>
      <StepOne />
    </>
  ) : (
    <StepTwo handleClose={handleClose} />
  );
  // <form
  //   action=""
  //   onSubmit={submitForm}
  //   className="flex h-full w-full flex-col gap-6 px-14"
  // >
  //   {step === 0 ? (
  //     <>
  //       <div className="flex flex-col gap-1.5">
  //         <label htmlFor="name">Имя</label>
  //         <input
  //           placeholder="Введите Имя"
  //           id="name"
  //           className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
  //         ></input>
  //       </div>
  //       <div className="flex flex-col gap-1.5">
  //         <label htmlFor="phone">Телефон</label>
  //         <input
  //           placeholder="+7 (900) 000-0000"
  //           type="tel"
  //           id="phone"
  //           className="inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
  //         ></input>
  //       </div>
  //       <div className="flex flex-col gap-1.5">
  //         <label htmlFor="contactMethod">Способ связи</label>
  //         <select
  //           placeholder="Любой"
  //           id="contactMethod"
  //           className="inline-flex h-12 appearance-none items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
  //         >
  //           <option value="any" hidden>
  //             Любой
  //           </option>
  //           <option value="phone">Телефон</option>
  //           <option value="whatsApp">Whats App</option>
  //           <option value="telegram">Telegram</option>
  //         </select>
  //       </div>
  //       <div
  //         className="
  //       mt-auto"
  //       ></div>
  //       <Button
  //         radius="small"
  //         size="small"
  //         onClick={nextStep}
  //         text={"Далее"}
  //         width="full"
  //       />
  //     </>
  //   ) : (
  //     <>
  //       <div className="pt-6"></div>
  //       <div className="flex w-full  gap-5">
  //         <div className="flex flex-1 flex-col gap-1.5">
  //           <label htmlFor="from">Откуда везти</label>
  //           <input
  //             placeholder="Выберите"
  //             id="from"
  //             className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
  //           ></input>
  //         </div>
  //         <div className="flex flex-1 flex-col gap-1.5">
  //           <label htmlFor="to">Куда везти</label>
  //           <input
  //             placeholder="Выберите"
  //             id="to"
  //             className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
  //           ></input>
  //         </div>
  //       </div>
  //       <div className="flex flex-col gap-1.5">
  //         <label>Кого везти</label>
  //         <select
  //           id="animal"
  //           className="aria-disabled::text-gray-300 inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow "
  //           defaultValue={""}
  //         >
  //           <option disabled hidden value="">
  //             Выберите
  //           </option>
  //           <option value="cat">Кошка</option>
  //           <option value="dog">Собака</option>
  //           <option value="other">Другое животное</option>
  //         </select>
  //       </div>
  //       <div className="flex flex-col gap-1.5">
  //         <label htmlFor="phone">Сообщение</label>
  //         <textarea
  //           maxLength={250}
  //           rows={4}
  //           id="message"
  //           placeholder="Введите сообщение"
  //           className="inline-flex items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
  //         ></textarea>
  //         <p className="ml-auto font-lato text-[0.6rem]/[12px] font-light">
  //           Максимум 250 символов
  //         </p>
  //       </div>
  //       <Checkbox />
  //       {/* <div className="flex">
  //         <input type="checkbox" />
  //         <label>
  //           Вы соглашаетесь с нашей дружественной политикой
  //           конфиденциальности.
  //         </label>
  //       </div> */}
  //       <div className="mt-auto flex w-full justify-between gap-5">
  //         <div className="flex-1">
  //           <Button
  //             radius="small"
  //             text={"Назад"}
  //             type="button"
  //             onClick={previousStpe}
  //             size="small"
  //             width="full"
  //           />
  //         </div>
  //         <div className="flex-1">
  //           <Button
  //             radius="small"
  //             size="small"
  //             text={"Отправить"}
  //             type="submit"
  //             width="full"
  //           />
  //         </div>
  //       </div>
  //     </>
  //   )}
  // </form>
};

export default FormContainer;
