import { useState, useEffect } from "react";

export default function Quizcard() {
  const [time, setTime] = useState(10);

  // Countdown timer
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-800 text-white">
      
      {/* Timer Circle */}
      <div className="relative mb-8">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="gray"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 36}
            strokeDashoffset={
              (2 * Math.PI * 36 * (10 - time)) / 10
            }
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {time}
        </span>
      </div>

      {/* Question Box */}
      <div className="bg-black/80 text-white text-center px-6 py-6 rounded-lg shadow-lg w-full max-w-xl mb-6">
        <p className="text-lg font-medium">
          1. What is the capital city of South Africa?
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-8">
        <button className="px-6 py-3 rounded-full bg-black/60 hover:bg-purple-600 transition">
          Home
        </button>
        <button className="px-6 py-3 rounded-full bg-black/60 hover:bg-purple-600 transition">
          Home
        </button>
        <button className="px-6 py-3 rounded-full bg-black/60 hover:bg-purple-600 transition">
          Home
        </button>
        <button className="px-6 py-3 rounded-full bg-black/60 hover:bg-purple-600 transition">
          Home
        </button>
      </div>

      {/* Next Button */}
      <button className="px-8 py-2 rounded-full font-semibold text-purple-700 bg-white hover:bg-gray-200 transition shadow-md">
        Next
      </button>
    </section>
  );
}
