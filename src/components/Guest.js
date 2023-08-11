import { useState } from "react";
import classNames from "classnames";

export default function Guest() {
  const [guestList, setGuestList] = useState(false);

  const clickHandler = () => {
    setGuestList(!guestList);
  };

  const guests = [
    'Родионов Валерий Александрович',
    'Родионова Надежда Дмитриевна',
    'Боев Виктор Александрович',
    'Боева Татьяна Матвеевна',
    'Мохначева Людмила Фёдоровна',
    'Карачёв Дмитрий Евгеньевич',
    'Карачёва Оксана Валериевна',
    'Мохначев Александр Евгеньевич',
    'Мохначева Анна Викторовна',
    'Родионов Александр Валериевич ',
    'Тохмахова Нина Сергеевна',
    'Мохначев Вадим Евгеньевич',
    'Мохначева Ирина Ивановна',
    'Мохначев Андрей Вадимович',
    'Карачёв Валерий Дмитриевич',
    'Филатова Галина Андреевна',
    'Мохначев Фёдор Евгеньевич',
    'Мохначева Виктория',
    'Мохначева Вероника Фёдоровна ',
    'Сипин Сергей Сергеевич',
    'Карачёва Дарина Дмитриевна',
    'Косолапов Игорь Владимирович',
    'Косолапова Екатерина Викторовна',
    'Боев Виктор Викторович ',
    'Боева Екатерина Александровна',
    'Боев Александр Михайлович',
    'Боева Александра',
    'Боева Анастасия Александровна' ,
    'Фоменков Дмитрий Игоревич',
    'Скокова Ксения Викторовна',
    'Косолапов Юрий Игоревич',
    'Косолапова Виктория Дмитриевна',
    'Будехин Роман Алексеевич',
    'Иванов Юрий Александрович',
    'Бобрикова Мария Андреевна',
    'Графов Александр Алексеевич',
    'Карих Ульяна Игоревна',
    'Околова Ксения Максимовна',
    'Цемко Варвара Сергеевна',
    'Храпова Елизавета Евгеньевна',
    'Захарченко Михаил Сергеевич',
    'Мохначева Арина Александровна',
    'Егоров Сергей Евгеньевич',
    'Боева Александра Викторовна',
    'Мохначев Сергей Александрович'
  ];

  const guestsPerColumn = Math.ceil(guests.length / 3);

  const getGuestName = (index) => guests[index] || "";

  return (
    <div className="flex text-[#5063a9] pt-20 flex-col items-center justify-center p-4">
      <div className="text-3xl">ГОСТИ</div>
      <div
        onClick={clickHandler}
        className="flex my-6 border-t-[1px] w-full max-w-md md:max-w-lg justify-between cursor-pointer"
      >
        <div className="text-2xl">Список гостей</div>
        <img
          className={classNames("h-9 transform", {
            "rotate-180": guestList,
          })}
          src="/icon-strelka.png"
          alt="arrow-icon"
        />
      </div>
      {guestList && (
        <div className="w-full max-w-lg rounded p-4">
          <table className="w-full table-fixed">
            <tbody>
              {Array.from({ length: guestsPerColumn }).map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={classNames({
                    "animate-slide-up-enter": guestList,
                    "animate-slide-up-leave": !guestList,
                  })}
                >
                  {Array.from({ length: 3 }).map((_, colIndex) => {
                    const guestIndex = colIndex * guestsPerColumn + rowIndex;
                    const guestName = getGuestName(guestIndex);
                    const isSpecialGuest =
                      guestName === "Графов Александр Алексеевич";

                    return (
                      <td
                        key={colIndex}
                        className={classNames("px-4 py-2 border-[1px] border-opacity-5 border-[#0f2a54]", {
                          "hover:text-red-700 cursor-pointer": isSpecialGuest,
                        })}
                      >
                        {isSpecialGuest ? (
                          <a
                            href="https://vk.com/foxisfox"
                            rel="noreferrer"
                            target="_blank"
                          >
                            {guestName}
                          </a>
                        ) : (
                          guestName
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
