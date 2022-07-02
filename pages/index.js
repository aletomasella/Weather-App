import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "../utilities";
import Image from "next/image";
import bgImage from "../public/assets/bgImage.jpg";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Loader from "../components/Loader";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `${api.getWeather}${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      )
      .then((res) => {
        setWeather((prev) => {
          const includedData = prev.filter((e) => e.id === res.data.id);
          if (includedData.length) {
            return [...prev];
          } else {
            return [...prev, res.data];
          }
        });
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
    setCity("");
  };

  const removeCity = (id) => {
    return setWeather((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="h-full">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Weather Application" />
          <title>Weather App</title>
        </Head>
        {/* <div className="hidden md:absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[1]" /> */}
        {/* <Image src={bgImage} alt="/" layout="fill" className="object-cover" /> */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full p-4 text-white z-10 m-auto">
          <form
            onSubmit={getWeather}
            className="flex justify-between items-center w-full m-auto bg-transparent border border-gray-400 rounded-2xl p-3"
          >
            <div>
              <input
                type="text"
                name="city"
                value={city}
                placeholder="Search city"
                onChange={handleInput}
                className="bg-transparent border-none focus:outline-none text-2xl w-full"
                autoComplete="off"
              />
            </div>
            <button onClick={getWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap">
            {weather &&
              weather.map((e) => {
                // console.log(e);
                return (
                  <div key={e.id}>
                    <Weather data={e} removeCity={removeCity} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}
