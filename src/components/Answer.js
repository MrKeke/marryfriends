import React, { useState } from 'react';

export default function Answer() {
  const questions = [
    [
      "Какие подарки предпочитаете?",
      "Мы не хотим обременять вас выбором подарка, поэтому будем очень рады вкладу в бюджет нашей молодой семьи",
    ],
    [
      "Какие подарки лучше дарить?",
      "Во время праздничного банкета, когда у всех гостей будет время подарить подарки лично",
    ],
  ];

  const [openAnswers, setOpenAnswers] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index) => {
    const newOpenAnswers = [...openAnswers];
    newOpenAnswers[index] = !newOpenAnswers[index];
    setOpenAnswers(newOpenAnswers);
  };

  const mapQuestion = () => {
    return questions.map(([q, a], index) => {
      return (
        <div key={index} className="mb-4">
          <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
            <div className="text-lg font-semibold">{q}</div>
            <img
              src="/plus.svg"
              alt="Toggle"
              className={`w-6 h-6 ${openAnswers[index] ? 'rotate-45' : ''}`}
            />
          </div>
          {openAnswers[index] && (
            <div className={`mt-2 text-gray-600 animate-answer ${openAnswers[index] ? 'open-answer' : ''}`}>
              {a}
            </div>
          )}
          {index !== questions.length - 1 && <div className="border-t my-2"></div>}
        </div>
      );
    });
  };

  return (
    <div className="text-[#5063a9] pt-20  flex justify-center items-center">
      <div className="w-1/2">
        <div className="text-3xl text-center font-semibold mb-6">Ответы на вопросы</div>
        <div>{mapQuestion()}</div>
      </div>
    </div>
  );
}
