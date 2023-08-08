
import { Disclosure } from "@headlessui/react";

export default function Nav({ children }) {
  const headerList = [
    {
      name: "АНКЕТА ДЛЯ ГОСТЕЙ",
    },
    {
      name: "ПРОГРАММА",
    },
    {
      name: "СПИСОК ГОСТЕЙ",
    },
    {
      name: "ОТВЕТЫ НА ВОПРОСЫ",
    },
    {
      name: "ФОТО СО СВАДЬБЫ",
    },
    {
      name: "МЕСТОПОЛОЖЕНИЕ",
    },
  ];
  return (
    <>
      <nav className="sticky top-0 z-50 w-full py-3 bg-slate-200 opacity-60">
        <Disclosure as="div" className="m-auto">
          {({ open }) => (
            <>
              <Disclosure.Button className="text-[#425576] font-semibold opacity-100 px-2 sm:px-4 lg:hidden xl:hidden">
                МЕНЮ
              </Disclosure.Button>
              <Disclosure.Panel className="pt-2">
                {headerList.map(({ name }) => (
                  <div
                    key={name}
                    className="text-[#425576] font-semibold opacity-100 m-auto px-2 sm:px-4 lg:px-6 xl:px-8"
                  >
                    {name}
                  </div>
                ))}
              </Disclosure.Panel>
              <div className="hidden lg:flex xl:flex">
                {headerList.map(({ name }) => (
                  <div
                    key={name}
                    className="text-[#425576] font-semibold opacity-100 m-auto px-2 sm:px-4 lg:px-6 xl:px-8"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </>
          )}
        </Disclosure>
      </nav>
      {children}
    </>
  );
}
