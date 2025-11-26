import { useRef, useState } from "react";
import Announcement from "./Announcement";

const LINE_UP = [
  { name: "Iron Maiden", image: "iron-maiden.png" },
  { name: "Alok", image: "alok.png" },
  { name: "Rita Ora", image: "rita-ora.png" },
  { name: "Dream Theater", image: "dream-theater.png" },
  { name: "announcement", image: "" },
  { name: "Dua Lipa", image: "dua-lipa.png" },
  { name: "Måneskin", image: "maneskin.png" },
  { name: "Emicida", image: "emicida.png" },
  { name: "Coldplay", image: "coldplay.png" },
  { name: "Justin Bieber", image: "justin-bieber.png" },
  { name: "Luísa Sonza", image: "luisa-sonza.png" },
  { name: "Marshmello", image: "marshmello.png" },
  { name: "Djavan", image: "djavan.png" },
  { name: "Offspring", image: "offspring.png" },
  { name: "Avril Lavigne", image: "avril-lavigne.png" },
  { name: "Black Pantera", image: "black-pantera.png" },
  { name: "Ed Sheeran", image: "ed-sheeran.jpg" },
];

export default function LineUp() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current || !isDragging) return;

    event.preventDefault();
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(event.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!containerRef.current || !isDragging) return;

    const x = event.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="w-full px-20 my-10 ">
      <h1 className="font-bold text-2xl mb-5">Line Up</h1>
      <div
        ref={containerRef}
        className="flex flex-row gap-6 overflow-x-auto scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {LINE_UP.map(({ name, image }) => {
          if (name === "announcement")
            return <Announcement key="announcement" />;

          return (
            <div
              key={name}
              className="relative bg-white min-w-[208px] h-[288px] rounded-md bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('/images/${image}')` }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-md" />
              <h1 className="absolute w-full text-center mt-[220px] font-bold z-10">
                {name}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
