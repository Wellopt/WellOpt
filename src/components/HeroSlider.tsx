import { useState, useEffect } from "react";

interface HeroSliderProps {
  images: string[];
  interval?: number;
  children: React.ReactNode;
  overlayClass?: string;
}

const HeroSlider = ({ 
  images, 
  interval = 5000, 
  children, 
  overlayClass = "bg-primary/70" 
}: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default HeroSlider;