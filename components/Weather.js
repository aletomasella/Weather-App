import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full m-auto text-gray-300 p-4 h-[90vh] z-10">
        <div>
          <div>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              height={100}
              width={100}
            />
            <p>{data.weather[0].main}</p>
          </div>
          <p>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
