import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { data } from "../utiils/EmployeeData";

const CardContainer = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardWidthRef = useRef(0);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard > 0 ? prevCard - 1 : prevCard));
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard < 4 ? prevCard + 1 : prevCard));
  };

  useEffect(() => {
    // Scroll to the current card when it changes
    if (cardContainerRef.current && cardWidthRef.current) {
      cardContainerRef.current.scrollTo({
        left: cardWidthRef.current * currentCard,
        behavior: "smooth",
      });
    }
  }, [currentCard]);

  useEffect(() => {
    // Update the card width when the component mounts or when the window is resized
    const updateCardWidth = () => {
      if (cardContainerRef.current && cardContainerRef.current.firstChild) {
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
    // Scroll to the current card when it changes
    if (cardContainerRef.current && cardWidthRef.current) {
      cardContainerRef.current.scrollTo({
        left: cardWidthRef.current * currentCard,
        behavior: "smooth",
      });
    }
  }, [currentCard]);

  const cardContainerRef = useRef(null);
  return (
    <section className="mt-8">
      <ul
        className=" pl-5 sm:pl-40 flex overflow-hidden space-x-8 py-5 transition-transform duration-300 ease-in-out"
        ref={cardContainerRef}
      >
        {data.map((ele, index) => {
          return (
            <Cards
              employee={ele}
              currentCard={currentCard === index ? true : false}
            />
          );
        })}
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
