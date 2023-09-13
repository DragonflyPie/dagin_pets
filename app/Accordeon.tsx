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
    <ul className="flex w-[768px] flex-col gap-6">
      {FAQ.map((item, index) => {
        return (
          <div className="flex flex-col gap-8" key={item.question}>
            <AccordeonItem content={item} />
            {index !== FAQ.length - 1 && <hr />}
          </div>
        );
      })}
    </ul>
  );
};

export default Accordeon;
