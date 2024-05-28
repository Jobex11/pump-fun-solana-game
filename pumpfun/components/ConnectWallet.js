import React from "react";

const ConnectWallet = (btnType, title, handleClick, styles) => {
  return (
    <button type="" className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
    onClick={btnType}
    >

    </button>
  );
};

export default ConnectWallet;
