

export default function Form(){


    return(
        <div className="flex flex-col items-center text-[#621924] ">
        <div className="my-6 text-3xl font-semibold">ДОРОГИЕ ГОСТИ!</div>
        <div className=" text-xl flex flex-col items-center">
        <div >Приглашаем вас на нашу свадьбу!</div>
        <div>Мы будем очень рады, если вы проведете вместе с нами этот особенный день.</div>
        <div>
        Подтвердите, пожалуйста, присутствие на торжестве
            <div className="text-xs text-center">(анкета для гостей, приглашенных на первый день свадьба)</div>
        </div>
        </div>
        <div className=" my-10">
           <button onClick={()=>window.location.href = "https://vk.com/feed"} className=" bg-black rounded-2xl h-16 px-6 text-white">Заполнить анкету</button>
        </div>
        </div>

    )
}