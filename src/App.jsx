import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: Expo.inOut,
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: Expo.inOut,
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: Expo.inOut,
    });
    gsap.to(".character", {
      scale: 0.7,
      x:"-50%",
      bottom: '-60%',
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: Expo.inOut,
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: Expo.inOut,
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 30;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar w-full top-0 left-0 absolute py-8 px-8 z-10">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line bg-white w-10 h-1 "></div>
                  <div className="line bg-white w-6 h-1 "></div>
                  <div className="line bg-white w-3 h-1 "></div>
                </div>
                <h3 className="text-2xl -mt-[6.5px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky w-full scale-[1.5] rotate-[-20deg] absolute top-0 left-0 h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg w-full scale-[1.8] -rotate-3deg absolute top-0 left-0 h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[8rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[8rem] leading-none ml-15">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-30">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white w-full absolute bottom-0 left-0 px-8 py-8 bg-linear-to-t from-black to-transparent">
              <div className="flex gap-1 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 h-10 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen px-10 flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg w-1/2 h-full relative">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[35%] py-15">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat nesciunt odit voluptatibus libero sapiente vel
                  officiis laborum numquam facilis, quis facere a animi.
                </p>
                <p className="mt-3 font-[Helvetica_Now_Display] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus saepe modi nisi quasi labore illo dolor doloribus
                  deleniti aliquid officia eum, porro sint, inventore eligendi
                  iusto aut, nemo ducimus fugit? Tempore ex facilis eligendi
                  laudantium.
                </p>
                <p className="mt-10 font-[Helvetica_Now_Display] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus saepe modi nisi quasi labore illo dolor doloribus
                  deleniti aliquid officia eum, porro sint, inventore eligendi
                  iusto aut, nemo ducimus fugit? Tempore ex facilis eligendi
                  laudantium.
                </p>
                <button className="bg-yellow-500 p-5 text-lg text-black mt-10">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
