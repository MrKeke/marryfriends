export default function Photo() {
  return (
    <div className="text-[#5063a9] text-xl pt-20 flex flex-col items-center pb-10">
      <div className="text-3xl font-semibold max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        ФОТО И ВИДЕО
      </div>
      <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center mt-4">
        Вы сможете увидеть и сохранить себе на память все{" "}
        <a
          className="text-indigo-950 underline"
          href="https://disk.yandex.ru/d/wYKiNhQsSOziyg"
          rel="noreferrer"
          target="_blank"
        >
          материалы
        </a>
      </div>
    </div>
  );
}
