import { useEffect, useState } from "react";

function calcTimeLeft() {
  const date = new Date();

  const finishTime = {
    second: 60,
    minutes: 30,
    hours: 14,
    day: 22,
  };

  const nowTime = {
    second: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
    day: Number(date.toString().slice(8, 10)),
  };

  return {
    second: Math.abs(finishTime.second - nowTime.second),
    minutes: Math.abs(nowTime.minutes - finishTime.minutes),
    hours: Math.abs(nowTime.hours - finishTime.hours),
    day: Math.abs(nowTime.day - finishTime.day),
  };
}
export default function Timer() {
  const [diffTime, setDiffTime] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiffTime(calcTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#5063a9]">
      <div className="text-center pt-32 py-6">ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ:</div>
      <div className=" flex flex-wrap justify-center">
        <TimeBlock value={diffTime.day} label="Дни" />
        <TimeBlock value={diffTime.hours} label="Часы" />
        <TimeBlock value={diffTime.minutes} label="Минуты" />
        <TimeBlock value={diffTime.second} label="Секунды" />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }) {
  if (label === "Дни") {
    if (value > 4) label = "Дней";
    if ([2, 3, 4].includes(value)) label = "Дня";
    else if (value === 1) label = "День";
    if (value === 0) label = "Дней";
  } else if (label === "Часы") {
    if ([1, 21].includes(value)) label = "Час";
    else if ([2, 3, 4, 22, 23, 24].includes(value)) label = "Часа";
    else label = "Часов";
  } else if (label === "Минуты") {
    if ([1, 21, 31, 41, 51].includes(value)) label = "Минута";
    else if (
      [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(value)
    )
      label = "Минуты";
    else label = "Минут";
  } else if (label === "Секунды") {
    if ([1, 21, 31, 41, 51].includes(value)) label = "Секунда";
    else if (
      [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(value)
    )
      label = "Секунды";
    else label = "Секунд";
  }

  return (
    <div className="  flex flex-col items-center mx-4 my-2 sm:mx-8">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
