import React from "react";
import Image from "next/image";
import { RiDeleteBack2Fill } from "react-icons/ri";

const Weather = ({ data, removeCity }) => {
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full m-auto text-gray-300 p-4 h-fi z-10">
        <div className="bg-black/60 relative p-8 rounded-lg text-xl">
          <div className="flex justify-end pb-2">
            <button onClick={() => removeCity(data.id)}>
              <RiDeleteBack2Fill size={25} />
            </button>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <p className="text-2xl text-center pb-2">
                Weather in {data.name}
              </p>

              <div className="flex justify-between">
                <div className="flex flex-col justify-between text-center pb-2">
                  <Image
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="/"
                    height={125}
                    width={125}
                  />
                  <p className="text-xl">{data.weather[0].main}</p>
                </div>

                <p className="text-8xl">
                  {(data.main.temp - 273.15).toFixed(0)}&#176;
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold text-2xl">
                {(data.main.feels_like - 273.15).toFixed(0)}&#176;
              </p>
              <p className="mr-2">Feels Like</p>
            </div>
            <div>
              <p className="font-bold text-2xl">{data.main.humidity} % </p>
              <p className="mr-2">Humidity</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.wind.speed.toFixed(0)} MPH
              </p>
              <p className="mr-2">Winds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
