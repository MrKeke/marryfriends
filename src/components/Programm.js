import classNames from "classnames"

export default function Programm(){
    const list = [
        {
            time: "14:30",
            name: "Сбор Гостей",
            svg: "./sbor.svg",
            info: 'Московская обл., Талдомский р-н, д.Гусенки, Загородный отель "Грасс Парк"',
            side: "left"
        },
        {
            time: "15:00",
            name: "Фуршет",
            svg: "./sbor.svg",
            info: 'Московская обл., Талдомский р-н, д.Гусенки, Загородный отель "Грасс Парк"',
            side: "right"
        },{
            time: "16:00",
            name: "Выездная церемония",
            svg: "./sbor.svg",
            info: 'Московская обл., Талдомский р-н, д.Гусенки, Загородный отель "Грасс Парк"',
            side: "left"
        },{
            time: "17:00",
            name: "Банкет",
            svg: "./sbor.svg",
            info: 'Московская обл., Талдомский р-н, д.Гусенки, Загородный отель "Грасс Парк"',
            side: "right"
        },
    ]
    const makeLine = (array) =>{
//classNames({"mr-10":side === "right"," mr-36":side === "left"})
        const {time,name,svg,info,side} = array
        return <div className="flex justify-center flex-row">
            <div className=" w-[2px] h-64 bg-yellow-950">
                <div className="ml-20 text-xs ">
                    <img className=" h-20 w-6" src="./food.svg"></img>
                    <div className="mb-5">{name}</div>
                    <div>{info}</div>
                    <div></div>
                </div>
            </div>
        </div>
    }
    const makeSphere = () =>{

        return <div className=" flex justify-center items-center ">
            <div className=" h-6 w-6 rounded-xl  bg-amber-600"></div>
        </div>
    }

    return(
        <div className="">
            <div className=" text-center text-3xl text-[#5063a9] font-semibold mb-20">ПРОГРАММА МЕРОПРИЯТИЯ</div>
            <div>{makeLine(list[0])}</div>
            <div>{makeSphere()}</div>
            <div>{makeLine(list[1])}</div>
            <div>{makeSphere()}</div>
            <div>{makeLine(list[2])}</div>
            <div>{makeSphere()}</div>
            <div>{makeLine(list[3])}</div>
            <div>{makeSphere()}</div>
        </div>
    )
}