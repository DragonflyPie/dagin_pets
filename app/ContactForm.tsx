"use client";
import { useState } from "react";
import Button from "./Button";

type Steps = 0 | 1;

const ContactForm = () => {
  const [step, setStep] = useState<Steps>(0);

  const nextStep = () => {
    setStep(1);
  };

  const previousStpe = () => {
    setStep(0);
  };

  return (
    <form
      action=""
      className="flex h-[500px] w-full flex-col gap-6 overflow-y-auto px-16"
    >
      {step === 0 ? (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              className="inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contactMethod">Способ связи</label>
            <select
              id="contactMethod"
              className="inline-flex h-12 appearance-none items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            >
              <option selected value="any">
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
          <div className="flex w-full  gap-5">
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="from">Откуда везти</label>
              <input
                id="from"
                className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
              ></input>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="to">Куда везти</label>
              <input
                id="to"
                className="inline-flex h-12 items-center justify-start rounded-lg border border-gray-300  px-4 py-3 shadow"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label>Кого везти</label>
            <select
              id="animal"
              className="inline-flex h-12 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            >
              <option value="cat">Кошка</option>
              <option value="dog">Собака</option>
              <option value="other">Другое животное</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone">Сообщение</label>
            <textarea
              id="message"
              className="inline-flex h-20 items-center justify-start  rounded-lg border border-gray-300  px-4 py-3 shadow"
            ></textarea>
          </div>
          <div className="flex">
            <input type="checkbox" />
            <label>
              Вы соглашаетесь с нашей дружественной политикой
              конфиденциальности.
            </label>
          </div>
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
