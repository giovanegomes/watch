import { PropsWithChildren, useRef, useState } from "react";

export default function Carousel({ children }: PropsWithChildren) {
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
      {children}
    </div>
  );
}
