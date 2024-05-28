"use client";
import Link from "next/link";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import PersonIcon from "@mui/icons-material/Person";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CryptoKingIcon from "./CryptoKingIcon";

const navlinks = [
  { name: "home", link: "/", icon: HomeIcon, disbled: false },
  { name: "profileview", link: "/", icon: PersonIcon, disabled: false },
  { name: "leaderboard", link: "/", icon: LeaderboardIcon, disbaled: false },
  // add other links
];

const Icon = ({ styles, name, isActive, disabled, handleClick, children }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {children}
  </div>
);

const Sidebar = () => {
  const [isActive, setIsActive] = useState("home");
  const [isSun, setIsSun] = useState(true);

  const toggleIcon = () => {
    setIsSun(!isSun);
  };
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32] p-1">
          <CryptoKingIcon
            style={{
              fontSize: "24px",
            }}
          />
        </Icon>
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Link key={link.name} href={link.link}>
              <Icon
                styles={`${
                  isActive === link.name ? "bg-[#2c2f32]" : ""
                } w-[48px] h-[48px] rounded-[10px]`}
                name={link.name}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                  }
                }}
              >
                <link.icon
                  style={{
                    fontSize: "24px",
                    color: isActive === link.name ? "#ffffff" : "#35af74",
                  }}
                />
              </Icon>
            </Link>
          ))}
        </div>
        <Icon styles="bg-[#1c1c24] shadow-secondary" handleClick={toggleIcon}>
          {isSun ? (
            <WbSunnyIcon style={{ fontSize: "24px", color: "#35af74" }} />
          ) : (
            <NightlightIcon style={{ fontSize: "24px", color: "#35af74" }} />
          )}
        </Icon>
      </div>
    </div>
  );
};

export default Sidebar;
