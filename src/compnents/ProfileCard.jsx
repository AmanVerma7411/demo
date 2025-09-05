import { useState } from "react";

export default function ProfileCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md bg-[#2a2a2a] text-white rounded-lg shadow-xl overflow-hidden">
    
        <div className="border-b border-gray-700 px-6 py-3 bg-[#333]">
          <h2 className="text-lg font-semibold">Edit profile</h2>
        </div>

   
        <form className="p-6 space-y-4">

          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              defaultValue="Oliver Noah"
              className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

    
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              defaultValue="jenny@example.com"
              className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

     
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              New Password (optional)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a new password"
                className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>

       
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 hover:bg-purple-800 rounded-md font-medium"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
