import { useRef } from "react";

export default function Nav({children}){

    const guestRef = useRef(null);
    const programRef = useRef(null);
    const dressCodeRef = useRef(null);
    const answerRef = useRef(null);
    const photoRef = useRef(null);
    const geoRef = useRef(null);
    const headerList = [
      {
        name: "АНКЕТА ДЛЯ ГОСТЕЙ",
        ref: guestRef,
      },
      {
        name: "ПРОГРАММА",
        ref: programRef,
      },
      {
        name: "ДРЕСС-КОД",
        ref: dressCodeRef,
      },
      {
        name: "СПИСОК ГОСТЕЙ",
        ref: answerRef,
      },
      {
        name: "ОТВЕТЫ НА ВОПРОСЫ",
        ref: photoRef,
      },
      {
        name: "ФОТО СО СВАДЬБЫ",
        ref: geoRef,
      },
      {
        name: "МЕСТОПОЛОЖЕНИЕ",
        ref: guestRef,
      },
    ];
  

    return(
        <>
        <nav className=" sticky top-0 w-full flex py-3 bg-slate-200 opacity-60">
        {headerList.map(({ name, ref }) => (
          <div className=" text-[#621924] font-semibold  opacity-100 m-auto">
            {name}
          </div>
        ))}
      </nav>
      {children}
        </>
    )
}