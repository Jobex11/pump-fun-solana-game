import React from "react";

const CryptoKingIcon = ({ isActive }) => {
  return (
    <div>
      <svg className="w-full h-full" fill="#ffffff" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.47-5.08-2.72-5.55-5.55H5v-2h2.45c.45-2.35 2.2-4.1 4.55-4.55V5h2v2.45c2.35.45 4.1 2.2 4.55 4.55H19v2h-2.45c-.47 2.83-2.72 5.08-5.55 5.55v-2.02c1.43-.26 2.56-1.39 2.82-2.82h-1.97a3.996 3.996 0 01-2.82 2.82V19.93zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    </div>
  );
};

/*
animate-spin-slow
 className=" rounded-xl transform transition duration-500 hover:rotate-6 hover:scale-110 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:text-black" 
 To add transition
*/

export default CryptoKingIcon;
