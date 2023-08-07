import { useEffect, useState } from "react";

function calcTimeLeft() {
  const date = new Date();

  const finishTime = {
    second: 60,
    minutes: 60,
    hours: 13,
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
  console.log(diffTime);
  return (
    <div className="text-4xl font-semibold text-[#621924]">
      <div className=" text-center py-6 ">ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ:</div>
      <div className="flex m-auto justify-center">
        <div className="flex flex-col items-center">
          <div className="">{diffTime.day * 24 + diffTime.hours}</div>
          <div className=" text-xs">Часы</div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <div className="">{diffTime.minutes}</div>
          <div className="text-xs">Минуты</div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="">{diffTime.second}</div>
          <div className="text-xs">Секунд</div>
        </div>
      </div>
    </div>
  );
}
