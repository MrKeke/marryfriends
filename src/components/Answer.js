import React, { useState } from "react";

export default function Answer() {
  const questions = [
    [
      "Возможно ли приехать на своем автомобиле?",
      "Да, на территории отеля имеется парковка на 20 мест",
    ],
    [
      "Кому можно задавать вопросы по организации мероприятия в день свадьбы?",
      "Наш свадебный координатор - Ксения с радостью ответит на ваши вопросы. Ее номер телефона: +7(909) 156-76-43 (Whatsapp)",
    ],
    ['Можно ли подготовить творческое выступление в момент поздравлений?','Конечно, мы будем очень рады, но заранее нужно сообщить об этом нашему прекрасному координатору, чтобы не возникло накладок по времени. Ксения, номер телефона: +7(909) 156-76-43 (Whatsapp)'],
    ['Можно ли приехать с детьми?','Да конечно, для них предусмотренна отдельная программа'],
    ['Где можно будет посмотреть фото и видео со свадьбы?','Все материалы появятся в течение месяца на сайте']

  ];

  const [openAnswers, setOpenAnswers] = useState(
    Array(questions.length).fill(false),
  );

  const toggleAnswer = (index) => {
    const newOpenAnswers = [...openAnswers];
    newOpenAnswers[index] = !newOpenAnswers[index];
    setOpenAnswers(newOpenAnswers);
  };

  const mapQuestion = () => {
    return questions.map(([q, a], index) => {
      return (
        <div key={index} className="mb-4">
          <div
            className="flex items-start justify-between cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="text-lg font-semibold">{q}</div>
            <img
              src="/plus.svg"
              alt="Toggle"
              className={`h-6 ${openAnswers[index] ? "rotate-45" : ""}`}
            />
          </div>
          {openAnswers[index] && (
            <div
              className={`mt-2 text-gray-600 animate-answer ${
                openAnswers[index] ? "open-answer" : ""
              }`}
            >
              {a}
            </div>
          )}
          {index !== questions.length - 1 && (
            <div className="border-t my-2"></div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="text-[#5063a9] pt-20  flex justify-center items-center">
      <div className="w-1/2">
        <div className="text-3xl text-center font-semibold mb-6">
          Ответы на вопросы
        </div>
        <div>{mapQuestion()}</div>
      </div>
    </div>
  );
}
