import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { data } from "../utiils/EmployeeData";

const CardContainer = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardWidthRef = useRef<number>(0);
  const cardContainerRef = useRef<HTMLUListElement | null>(null);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard > 0 ? prevCard - 1 : prevCard));
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard < data.length - 1 ? prevCard + 1 : prevCard
    );
  };

  useEffect(() => {
    const updateCardWidth = () => {
      if (
        cardContainerRef.current &&
        cardContainerRef.current.firstChild instanceof HTMLElement
      ) {
        cardWidthRef.current = cardContainerRef.current.firstChild.offsetWidth;
      }
    };

    window.addEventListener("resize", updateCardWidth);
    updateCardWidth();

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  useEffect(() => {
    if (cardContainerRef.current && cardWidthRef.current) {
      cardContainerRef.current.scrollTo({
        left: cardWidthRef.current * currentCard,
        behavior: "smooth",
      } as ScrollToOptions);
    }
  }, [currentCard]);

  return (
    <section className="mt-8">
      <ul
        className="pl-5 sm:pl-40 flex overflow-hidden space-x-8 py-5 transition-transform duration-300 ease-in-out"
        ref={cardContainerRef}
      >
        {data.map((ele, index) => (
          <Cards
            key={index}
            employee={ele}
            currentCard={currentCard === index}
          />
        ))}
      </ul>
      {/* Navigation Arrows */}
      <section className="flex justify-center mt-5">
        <img
          className="h-7 w-7 object-contain cursor-pointer"
          src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-left-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
          alt="Left Arrow"
          onClick={handlePrevCard}
        />
        <img
          className="h-7 w-7 object-contain cursor-pointer"
          src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
          alt="Right Arrow"
          onClick={handleNextCard}
        />
      </section>
    </section>
  );
};

export default CardContainer;
