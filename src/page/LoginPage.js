import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import paths from "../utils/paths";
import { useSelector } from "react-redux";
import Login from "../component/authen/Login";
import SignUp from "../component/authen/SignUp";
const LoginPage = () => {
  const [active, setActive] = useState(true);
  const user = {};
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (user !== null) {
  //       navigate(paths.HOME);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [user]);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-6 items-center justify-center w-fit h-fit absolute  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  border border-slate-600 px-10 py-[60px]">
        <div className="flex gap-4 items-center">
          <span
            onClick={() => setActive(true)}
            className={`px-4 py-2 border-b-[2px] cursor-pointer ${
              active ? "border-b-black" : "border-b-transparent"
            }`}
          >
            Login
          </span>
          <span className="w-[1px] h-[20px] bg-black"></span>
          <span
            onClick={() => setActive(false)}
            className={`px-4 py-2 border-b-[2px] cursor-pointer ${
              !active ? "border-b-black" : "border-b-transparent"
            }`}
          >
            Signup
          </span>
        </div>
        {active ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default LoginPage;
