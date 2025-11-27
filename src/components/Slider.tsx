import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

type Banner = {
  image: string;
  slogan: string;
  url: string;
  color: string;
};

type SliderProps = {
  banners: Banner[];
  interval?: number;
};

export default function Slider({ banners, interval = 2000 }: SliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % banners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [banners.length, interval]);

  return (
    <div className="relative w-full bg-white px-4 md:px-8 pt-6 md:pt-8 pb-3">
      <div className="relative w-full h-[220px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          {banners.map(({ image, slogan, url, color }, index) => (
            <div
              key={`${image}-${index}`}
              className={`
                absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out
                ${current === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <img
                src={`/images/${image}`}
                alt={`slide-${image}`}
                className="absolute inset-0 w-full h-full z-10"
              />
              <div className="absolute inset-0 flex md:items-end md:justify-end items-end justify-end p-4 md:p-10 z-20">
                <a
                  href={url}
                  target="_blank"
                  style={{ backgroundColor: color }}
                  className="flex flex-row items-center gap-2 text-white font-bold md:font-extrabold px-2 py-1 my-2 md:px-4 md:py-2 text-xs md:text-lg"
                >
                  {slogan.toUpperCase()}
                  <IoMdArrowForward
                    size={22}
                    className="md:w-[30px] md:h-[30px]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-3 md:mt-4">
        <div className="flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all
                ${current === index ? "bg-primary scale-125" : "bg-primary/30"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
