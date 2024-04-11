import React from "react";

// CSS for Cedarville Cursive font

const Instapage = () => {
  return (
    <div>
      {/* Note: Fonts are typically imported in the HTML file, not in React components */}
      <div className="text-white border-2 border-black lg:bg-white h-screen w-screen">
        <div className="flex flex-row justify-around ">
          <div className="columns-2 gap-4 m-10  pl-50 border border-slate-300 flex flex-row justify-center  ">
            <img
              src="/images/screenshot4.jpg"
              className="w-56 h-100 hidden sm:block"
              alt=""
            />
            <img
              src="/images/screenshot1.jpg"
              className="w-56 h-100 hidden sm:block"
              alt=""
            />
            <div className=" flex  flex-col">
              <div className="border-b text-black text-center w-80 h-auto flex flex-col  items-center m-3 border-[#dbdbdb]">
                <img src="/images/insta-pic.jpg" className=" " alt="" />
                <div style={{ position: "relative" }}>
                  <input
                    className="border p-2 pt-3 bg-[#fafafa] pb-2 w-72 text-sm text-[#373737]  border-slate-300  "
                    placeholder="Phone number, username, or email"
                    type="text"
                  />

                  <input
                    className="border mt-2 pt-3 bg-[#fafafa] pb-2 p-2 w-72 mb-4 text-sm text-[#373737] border-slate-300"
                    placeholder="Password"
                    type="password"
                  />
                  <button
                    style={{
                      position: "absolute",
                      right: "25px",
                      top: "50%",
                      transform: "translateY(20%)",
                    }}
                  >
                    <div className="flex flex-row text-[#00376b]   font-semibold justify-end ">
                      show
                    </div>
                  </button>
                </div>

                <button>
                  <div className="border border-sky-400 mb-8 mt-2 pt-1 text-bold  pb-1 p-2 w-72 rounded-md bg-sky-500 hover:bg-[#1877f2] text-white">
                    Log in
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-1 flex-row justify-center items-center ">
                  <img
                    src="/images/fb-logo.jpg"
                    className="w-8 h-8 cursor-pointer"
                    alt=""
                  />
                  <div className="text-[#385185] font-semibold text-medium text-medium cursor-pointer">
                    Log in with Facebook
                  </div>
                </div>
                <div className="text-[#00376b] pb-4 text-sm">Forgot Password?</div>
                <div className="text-black text-sm border justify-center items-center p-4">
                <div className=" w-64 translate-x-7">
                  Dont have an account?{" "}
                  <span className="text-[#4cb5f9] font-semibold">Sign up</span>
                </div>
                </div></div>
                
              
            </div>
            <div className="text-black text-sm ">Get the app.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instapage;
