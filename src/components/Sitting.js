

export default function Sitting(){
    const circleDivs = Array.from({ length: 6 }, (_, index) => (
        <img
          key={index}
          src="Frame_1_3.png"
          className="absolute mx-8 w-32 h-32 rounded-full"
          style={{
            transform: `rotate(${index * 60}deg) translate(100px) rotate(-${index * 60}deg)`,
          }}
        ></img>
      ));
    
      return (
        <div className="relative h-96 flex justify-center items-center">
          <div className="w-24 h-24 relative">
            {circleDivs}
          </div>
        </div>
      );
    
  };