import CardContainer from "./components/CardContainer";

function App() {
  return (
    <>
      <main className="bg-[rgb(33,49,60)] h-screen w-screen pt-12 relative overflow-hidden">
        {/* Upper Div */}
        <section className=" flex justify-center relative overflow-hidden">
          <section className="font-satoshi  max-w-[800px] w-[96%] text-center  text-white leading-10 relative">
            <h1
              className="bg-clip-text text-transparent bg-gradient-to-t from-transparent  to-[#fff] sm:text-[40px] md:text-[46px] text-[24px] text-center font-semibold mb-4 "
              style={{ lineHeight: "1.3" }}
            >
              Angle Brackets Mobile App development experts
            </h1>
            <p className="text-base text-center text-[#b2bec3] w-full font-thin sm:text-xl text-sm">
              Angle Brackets will quickly assemble a team of Front-end
              developers for your needs
            </p>
          </section>
        </section>

        <section className="relative overflow-hidden">
          {/* Slider with Rotating Cards */}
          <CardContainer />
        </section>

        {/* Corner Images  */}

        <img
          className="absolute bottom-0 left-0 h-48 object-cover object-top "
          src="01.png"
          alt="vector_One"
        />

        <img
          className="h-[20px] md:h-[300px] object-cover -z-1 absolute right-0 top-0"
          src="download.png"
          alt="vector"
        />
      </main>
    </>
  );
}

export default App;
