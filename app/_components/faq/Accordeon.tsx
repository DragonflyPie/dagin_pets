import AccordeonItem from "./AccordeonItem";

const FAQ = [
  {
    question: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Как долго мой кот будет орать в самолёте?",
    answer:
      "Столько сколько потребуется. А именно бесконечно долго. Долго и громко. Орать и орать. Потом он снова будет орать. Иногда он будет молчать, одну-две минуты. Но затем он снова заорёт. Но беспокоиться не стоит - это выдуманная ситуация, иллюстрирующая длинный ответ.",
  },
  {
    question: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Accordeon = () => {
  return (
    <ul className="flex w-full flex-col gap-6 divide-y pb-12 md:pb-16 xl:w-[768px]">
      {FAQ.map((item) => {
        return <AccordeonItem content={item} key={item.question} />;
      })}
    </ul>
  );
};

export default Accordeon;
