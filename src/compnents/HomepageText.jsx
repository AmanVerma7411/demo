import lucky from "../images/lucky.png";

export default function HomepageText() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-800 text-white min-h-screen">
         
       
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            LET’s DO SOME TRIAL
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            BEFORE
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            START TO PLAY
          </h1>

         
          <button className="mt-8 px-10 py-3 rounded-full font-bold text-sm text-purple-700 bg-white hover:bg-gray-100 transition shadow-lg">
            PLAY
          </button>
        </div>
      </section>
    </>
  );
}
