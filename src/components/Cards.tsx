const Cards = ({ employee, currentCard }: any) => {
  return (
    <li
      className={`z-10 space-y-4 items-start justify-start  p-[15px] sm:p-[30px] sm:px-5 rounded-[20px] w-[358px] flex-shrink-0  sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] transform bg-[rgb(42,58,68)] ${
        currentCard ? "scale-105" : ""
      }`}
    >
      <section className="bg-gradient2  flex flex-col h-[78px] items-center justify-start p-3.5 rounded-[50%] w-[78px]">
        <img
          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
          src={employee?.profilePic}
          alt="featureiconwith"
        />
      </section>
      <section className="flex flex-col gap-4 items-start justify-start w-full text-white">
        <section className="flex flex-col gap-2 items-start justify-center w-full">
          <h4 className="text-sm sm:text-lg font-bold w-full">
            {employee?.name}
          </h4>
          <h6 className="text-sm text-base  w-full">{employee?.role}</h6>
        </section>
        <p className="leading-[24.00px] max-w-[298px] md:max-w-full text-base text-justify text-[#b2bec3] text-sm">
          {employee?.desc}
        </p>
      </section>
      <img className="h-[40px]  object-contain " src={employee?.techStackPic} />
    </li>
  );
};

export default Cards;
