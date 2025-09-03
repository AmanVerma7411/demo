import lucky from "../images/lucky.png";
export default function Homepagecon() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-800 text-white min-h-screen">
        
        
        <div className="flex flex-col items-start gap-6 max-w-lg text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            EXPLORE THE NEW <br /> WORLD OF <br /> SUPER WINNINGS!!
          </h1>

          <button className="px-6 py-3 rounded-full font-semibold text-sm text-purple-700 bg-white hover:bg-gray-100 transition">
            PLEASE REGISTER TO PROCEED
          </button>
        </div>

        
        <div className="mb-10 md:mb-0 flex justify-center md:justify-end">
          <img
            src={lucky} 
            alt="Big Win"
            className="w-[300px] sm:w-[400px] md:w-[500px] drop-shadow-2xl"
          />
        </div>
      </section>
    </>
  );
}
