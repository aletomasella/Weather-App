import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full m-auto text-gray-300 p-4 h-[20vh] z-10">
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col items-center">
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              height={100}
              width={100}
            />
            <p className="text-xl">{data.weather[0].main}</p>
          </div>
          <p className="text-xl">
            {(data.main.temp - 273.15).toFixed(0)}&#176;
          </p>
        </div>
        <div className="bg-black/50 relative">
          <p>{data.name}</p>
          <div>
            <p>{(data.main.feels_like - 273.15).toFixed(0)}&#176;</p>
            <p>Feels Like</p>
            <p>{data.main.humidity}</p>
            <p>Humidity</p>
            <p>{data.winds.speed.toFixed(0)} MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
