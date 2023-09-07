import { useState } from "react";

export default function Timer() {



  return (
    <div className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#5063a9]">
      <div className="text-center pt-32 py-6">ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ:</div>
      <div className=" flex flex-wrap justify-center">
        <TimeBlock value='0' label="Дни" />
        <TimeBlock value='0' label="Часы" />
        <TimeBlock value='0' label="Минуты" />
        <TimeBlock value='0' label="Секунды" />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div className="  flex flex-col items-center mx-4 my-2 sm:mx-8">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
