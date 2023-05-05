import React, { useRef } from "react";
import { BsFillUnlockFill, BsEnvelopeFill } from "react-icons/bs";

const LoginReg = () => {
  // ========== for form tab activity =========
  const loginBtn = useRef(null);
  const regBtn = useRef(null);
  const switcherTab = useRef(null);
  const loginTab = useRef(null);
  const registerTab = useRef(null);

  const switchTab = (tab) => {
    if (tab === "login") {
      switcherTab.current.classList.remove("translate-x-full");
      loginBtn.current.classList.add("bg-[#7e33e057]");
      regBtn.current.classList.remove("bg-[#7e33e057]");

      registerTab.current.classList.add("hidden");
      registerTab.current.classList.remove("block");

      loginTab.current.classList.add("block");
      loginTab.current.classList.remove("hidden");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("translate-x-full");
      loginBtn.current.classList.remove("bg-[#7e33e057]");
      regBtn.current.classList.add("bg-[#7e33e057]");

      registerTab.current.classList.add("block");
      registerTab.current.classList.remove("hidden");

      loginTab.current.classList.add("hidden");
      loginTab.current.classList.remove("block");
    }
  };

  //============ login submit action =========
  const handleLogin = (e) => {
    e.preventDefault();
  };

  //============ login submit action =========
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen w-screen">
      <div className="min-h-3/5 md:h-3/4 w-10/12 md:w-1/2 lg:w-1/3 m-auto shadow-lg border border-1 mt-8 overflow-hidden">
        {/* ======== log-sign button ======= */}
        <div className="w-full grid grid-cols-2 place-items-center">
          <button
            ref={loginBtn}
            onClick={() => switchTab("login")}
            className="basis-1/2 font-semibold py-2 w-full text-center text-sm hover:text-heading cursor-pointer bg-[#7e33e057]"
          >
            Login
          </button>
          <button
            ref={regBtn}
            onClick={() => switchTab("register")}
            className="basis-1/2 font-semibold py-2 w-full text-center text-sm hover:text-heading cursor-pointer  "
          >
            Register
          </button>
        </div>

        <div
          ref={switcherTab}
          className="w-1/2 h-[2px] bg-secondary shadow-2xl shadow-black transition-all duration-300 ease-out"
        ></div>

        {/*======== login form =========*/}
        <form className="p-7 block" ref={loginTab} onSubmit={handleLogin}>
          <div className="relative mb-3">
            <BsEnvelopeFill className="text-[#9f54ff] text-base absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="pl-14 pr-4 py-4 w-full rounded-md focus:outline-[#7e33e070] bg-[#d3b9f42b]"
            />
          </div>
          <div className="relative">
            <BsFillUnlockFill className="text-[#9f54ff] text-base absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-14 pr-4 py-4 w-full rounded-md focus:outline-[#7e33e070] bg-[#d3b9f42b]"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-5 w-2/3 block mx-auto bg-primary hover:bg-[#fb2e87d7] transition text-gray-100 text-sm font-semibold text-center py-2 rounded-lg cursor-pointer"
          />
        </form>

        {/* ========== Register form ============ */}
        <form
          className="p-7 hidden"
          ref={registerTab}
          onSubmit={handleRegister}
        >
          <div className="relative mb-3">
            <BsEnvelopeFill className="text-[#9f54ff] text-base absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="pl-14 pr-4 py-4 w-full rounded-md focus:outline-[#7e33e070] bg-[#d3b9f42b]"
            />
          </div>
          <div className="mb-3 relative">
            <BsFillUnlockFill className="text-[#9f54ff] text-base absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-14 pr-4 py-4 w-full rounded-md focus:outline-[#7e33e070] bg-[#d3b9f42b]"
            />
          </div>
          <div className="mb-3 relative">
            <BsFillUnlockFill className="text-[#9f54ff] text-base absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="pl-14 pr-4 py-4 w-full rounded-md focus:outline-[#7e33e070] bg-[#d3b9f42b]"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-5 w-2/3 block mx-auto bg-primary hover:bg-[#fb2e87d7] transition text-gray-100 text-sm font-semibold text-center py-2 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginReg;
