import { useState } from "react"
import classNames from "classnames"
export default function Guest(){

    const [guestList, switchGuestList] = useState(false)

    const clickHanler = () =>{
        switchGuestList(!guestList)
    }
    const guests = ['Я','Ты','Я','Ты','Я','Ты','Я','Ты','Я','Ты','Я','Ты',]
    return(
        <div className=" text-2xl font-semibold flex flex-col items-center py-12 text-[#621924] " >
            <div className="  text-3xl my-5">СПИСОК ГОСТЕЙ</div>
            <div onClick={clickHanler} className=" flex justify-between border-t-[0.5px] border-y-zinc-700 w-[50rem] ">
                <div className="">Гости</div>
                <div className={classNames({"animate-spin-slow-open":guestList,"animate-spin-slow-close": !guestList})}><img className=" h-9" src="/icon-strelka.png"/></div>
                {guestList ? '' : ''}
            </div>
        </div>
    )
}