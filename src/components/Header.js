
export default function Header() {
  return (
    <div className="bg-[url('img/k.jpg')] bg-center bg-cover text-[#425576] pt-52 bg-no-repeat relative min-h-screen">
      <div className="flex flex-col justify-center items-center pt-[30rem] h-screen text-4xl md:text-7xl">
        <div className="mb-2 md:mb-4 font-names">Дамир</div>
        <img
          className="w-8 mx-4 animate-ping md:w-12 h-12"
          alt="heart"
          src="/heart.svg"
        ></img>
        <div className="mb-2 md:mb-4 font-names">Мария</div>
      </div>
      <div className="absolute bottom-0 text-xl left-0 right-0 px-8 py-4 text-center bg-opacity-75 bg-white">
        22 АВГУСТА 2023
      </div>
    </div>
  );
}
