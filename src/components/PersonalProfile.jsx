import React from "react";
import user from "../images/user.png";

const PersonalProfile = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F0E7DC]">
      <div className="w-4/6 h-5/6 ml-40 ">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl font-medium">Takuya Matsuyama</h3>
            <p className="text-sm">
              Digital Craftsman(Artist/Developer/Designer)
            </p>
          </div>
          <img className="rounded-full w-20 mr-52" src={user} alt="Logo" />
        </div>
        <h3 className=" w-12 font-bold border-black border-b-4">Work</h3>
        <p className="w-5/6 mt-4">
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and desi-<br/>gning all the
          way to solving  real-life problems  with code. When not online, he loves
          hanging out <br/> with his camera. Currently, he is living off of his own
          product called <span>Inkdrop</span>. He published content <br/> for the
          marketing his products and his YouTube channel called "
          <span>Dev as Life</span>" has more than 100k subscribers.
        </p>
        <button className="px-4 py-1 text-white ml-72 mt-4 rounded bg-[#349795]">My Portfolio</button>
        <h3 className=" w-8 font-bold border-black border-b-4">Bio</h3>
        <div className="mt-2"><span className="font-medium mr-2 ">1984</span>Born in Osaka, Japan.</div>
      </div>
    </div>
  );
};

export default PersonalProfile;
