import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedFirstName = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedFirstName === email && storedPassword === password) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const errorDisplay = useMemo(() => {
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
    return null;
  }, [error]);

  return (
    <>
      <div className="">
        <div className="container">
          <Navbar />
          <div className="flex items-center justify-center min-h-screen h-max py-[20px]">
            <div className="w-[531px] px-2 py-2">
              <h3 className="font-black text-base text-[#349795] dark:text-[#83E6D9] uppercase">
                Log In
              </h3>
              <h2 className="mt-2 tablet:text-[32px] text-[24px] font-bold ">
                Simplify Contact Management
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-6 mt-5"
              >
                <input
                  className=""
                  type="email"
                  placeholder="Enter your Email here"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="w-full">
                  <input
                    className=""
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errorDisplay}
                </div>
                <button
                  className="mt-2 text-2xl text-center btn btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div className="flex text-base mt-[20px] font-normal">
                <p>Don't have an account yet? </p>
                <Link
                  to={"/"}
                  className="text-[#349795] dark:text-[#E95EB2] ml-1"
                >
                  Sign Up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Login);
