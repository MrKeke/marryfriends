export default function Form() {
  return (
    <div className="flex flex-col items-center text-[#5063a9] p-4 sm:p-8">
      <div className="text-center">
        <div className="my-6 text-3xl pt-20 font-semibold">ДОРОГИЕ ГОСТИ!</div>
        <div className="text-2xl md:text-3xl lg:text-4xl my-6">
          Приглашаем Вас на нашу свадьбу!
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
          Мы будем очень рады, если Вы проведете вместе с нами этот особенный
          день. Подтвердите, пожалуйста, присутствие на торжестве:
        </div>
        <div className="text-base md:text-lg lg:text-xl mt-2">
          (анкета для гостей, приглашенных на свадьбу)
        </div>
      </div>
      <div className="my-10">
        <button
          // onClick={() =>
          // (window.location.href = "https://forms.gle/eiTziDGYZpfTHPkd7")
          // }
          className="bg-[#a3b4d0] rounded-lg h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-lg md:text-xl lg:text-2xl"
        >
          <a
            href="https://forms.gle/eiTziDGYZpfTHPkd7"
            rel="noreferrer"
            target="_blank"
          >
            Заполнить анкету
          </a>
        </button>
      </div>
    </div>
  );
}
