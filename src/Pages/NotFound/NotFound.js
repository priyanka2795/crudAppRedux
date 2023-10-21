import React from "react";
import { Link } from "react-router-dom";
// import { GIF } from "../../../public/not-found.gif";
const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <div className="container">
        <div className="text-center">
          <h1 className="relative z-10 heading-1">404</h1>
        </div>
        <div className="text-center">
          <img
            className="mx-auto w-[600px] lg:my-[-80px] my-[-40px]"
            src="/images/not-found.gif"
            alt=""
          />
          <h3 className="heading-3">Look like you're lost</h3>

          <p className="font-semibold text-black/70">
            the page you are looking for not available!
          </p>

          <Link
            to="/"
            className="block px-8 py-3 mx-auto mt-8 font-semibold text-white bg-blue-500 center rounded-xl w-fit"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
