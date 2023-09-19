"use client";
import { useState } from "react";
import Button from "./Button";
import Checkbox from "./CheckBox";
import useModalStore from "./store";

type Steps = 0 | 1;

const ContactForm = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [step, setStep] = useState<Steps>(0);

  const nextStep = () => {
    setStep(1);
  };

  const previousStpe = () => {
    setStep(0);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form
      action=""
      onSubmit={submitForm}
      className="flex h-full w-full flex-col gap-6 px-14"
    >
      {step === 0 ? (
        <>
          <hgroup className="flex flex-col items-center pb-16 font-lato">
            <p className="pb-3 text-base font-semibold text-blue-button-default">
              Связаться с нами
            </p>
            <h5 className="pb-5 text-4xl/[44px] font-semibold">
              Контактная форма
            </h5>
            <p className="text-xl/[30px] text-gray-form-heading">
              Заполните данные и мы Вам ответим
            </p>
          </hgroup>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name">Имя</label>
            <input
              placeholder="Введите Имя"
              id="name"
              className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone">Телефон</label>
            <input
              placeholder="+7 (900) 000-0000"
              type="tel"
              id="phone"
              className="inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contactMethod">Способ связи</label>
            <select
              placeholder="Любой"
              id="contactMethod"
              className="inline-flex h-12 appearance-none items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            >
              <option value="any" hidden>
                Любой
              </option>
              <option value="phone">Телефон</option>
              <option value="whatsApp">Whats App</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>
          <div
            className="
          mt-auto"
          ></div>
          <Button
            radius="small"
            size="small"
            onClick={nextStep}
            text={"Далее"}
            width="full"
          />
        </>
      ) : (
        <>
          <div className="pt-6"></div>
          <div className="flex w-full  gap-5">
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="from">Откуда везти</label>
              <input
                placeholder="Выберите"
                id="from"
                className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
              ></input>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="to">Куда везти</label>
              <input
                placeholder="Выберите"
                id="to"
                className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label>Кого везти</label>
            <select
              id="animal"
              className="aria-disabled::text-gray-300 inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow "
              defaultValue={""}
            >
              <option disabled hidden value="">
                Выберите
              </option>
              <option value="cat">Кошка</option>
              <option value="dog">Собака</option>
              <option value="other">Другое животное</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone">Сообщение</label>
            <textarea
              maxLength={250}
              rows={4}
              id="message"
              placeholder="Введите сообщение"
              className="inline-flex items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></textarea>
            <p className="ml-auto font-lato text-[0.6rem]/[12px] font-light">
              Максимум 250 символов
            </p>
          </div>
          <Checkbox />
          {/* <div className="flex">
            <input type="checkbox" />
            <label>
              Вы соглашаетесь с нашей дружественной политикой
              конфиденциальности.
            </label>
          </div> */}
          <div className="mt-auto flex w-full justify-between gap-5">
            <div className="flex-1">
              <Button
                radius="small"
                text={"Назад"}
                type="button"
                onClick={previousStpe}
                size="small"
                width="full"
              />
            </div>
            <div className="flex-1">
              <Button
                radius="small"
                size="small"
                text={"Отправить"}
                type="submit"
                width="full"
              />
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
