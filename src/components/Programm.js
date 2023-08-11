export default function Programm(){
    const list = [
        {
            time: "14:30",
            name: "Сбор Гостей",
            svg: "./sbor.svg",
            info: 'Московская обл., Талдомский р-н, д.Гусенки, Загородный отель "Грасс Парк"',
        },
        {
            time: "15:00",
            name: "Фуршет",
            svg: "./food.svg",
            info: 'Время еды и выпивки',
        },{
            time: "16:00",
            name: "Выездная церемония",
            svg: "./car.svg",
            info: 'Едем куда-то',
        },{
            time: "17:00",
            name: "Банкет",
            svg: "./realfood.svg",
            info: 'Вкусная еда и развлекательная программа',
        },
    ]
    const makeLine = (array) =>{
        const {time,name,svg,info} = array
        return<>
        <div className=" text-[#5063a9] text-xl flex justify-center flex-col items-center ">
            <div><img className=" mt-3 h-10" src={svg}></img></div>
            <div className=" text-2xl mb-3">{time}</div>
            <div className=" mb-1">{name}</div>
            <div className="mb-2">{info}</div>
        
        </div>
        <div className="flex justify-center flex-row">
            <div className=" w-[2px] h-64 bg-yellow-950">
            </div>
        </div>
        </> 
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
            {/* <div>{makeSphere()}</div> */}
            <div>{makeLine(list[1])}</div>
            {/* <div>{makeSphere()}</div> */}
            <div>{makeLine(list[2])}</div>
            {/* <div>{makeSphere()}</div> */}
            <div>{makeLine(list[3])}</div>
            <div>{makeSphere()}</div>
        </div>
    )
}