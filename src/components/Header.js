import { useRef } from "react";

export default function Header() {
 
  return (
    <div className="bg-[url('img/k.png')] bg-cover bg-center bg-no-repeat h-[720px]">

      <div className="flex justify-center py-10 text-7xl text-white font-names">
        <div>Дамир</div>
        <div className=" mx-4">
          <img className="animate-ping" alt="heart" src="/heart.svg"></img>
        </div>
        <div>Мария</div>
      </div>
      <div className="text-center text-white py-96 text-6xl">
        22 АВГУСТА 2023
      </div>
    </div>
  );
}
