import React, { useState, useEffect } from "react";
import '../App.css';

import landing from '../pics/landing.png';


const Landing = ({primaryColor, secondaryColor}) => {
  const textColor = `text-[${primaryColor}]`;

  const [text, setText] = useState(["", "", "", "", ""]);

  function wait(delay) {
      return new Promise( res => setTimeout(res, delay) );
  }

  async function loading_animation() {
    // await wait(1000);
    // setText(["1\u00A0\u00A0\u00A0", "M\u00A0\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["2\u00A0\u00A0\u00A0", "M\u00A0\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["M\u00A0\u00A0\u00A0", "M\u00A0\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["M1\u00A0\u00A0", "MO\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["M2\u00A0\u00A0", "MO\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["MO\u00A0\u00A0", "MO\u00A0\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["MO1\u00A0", "MOO\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["MO2\u00A0", "MOO\u00A0", "", "", ""]);
    // await wait(300);
    // setText(["MOO\u00A0", "MOO\u00A0", "", "", ""]);
    await wait(1000);
    setText(["Ξσσρ", "MOON", "", "", ""]);
    await wait(300);
    setText(["Πττς", "MOON", "", "", ""]);
    await wait(300);
    setText(["MOON", "MOON", "", "", ""]);
    // await wait(300);
    // setText(["MOO1", "MOON", "", "", ""]);
    // await wait(300);
    // setText(["MOO2", "MOON", "", "", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "", "", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "1\u00A0\u00A0\u00A0", "W\u00A0\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "2\u00A0\u00A0\u00A0", "W\u00A0\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "W\u00A0\u00A0\u00A0", "W\u00A0\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "W1\u00A0\u00A0", "WR\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "W2\u00A0\u00A0", "WR\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WR\u00A0\u00A0", "WR\u00A0\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WR1\u00A0", "WRA\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WR2\u00A0", "WRA\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WRA\u00A0", "WRA\u00A0", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WRA1", "WRAP", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WRA2", "WRAP", ""]);
    // await wait(300);
    // setText(["MOON", "MOON", "WRAP", "WRAP", ""]);
    await wait(300);
    setText(["MOON", "MOON", "ϸχͰυ", "WRAP", ""]);
    await wait(300);
    setText(["MOON", "MOON", "ϼψͱφ", "WRAP", ""]);
    await wait(300);
    setText(["MOON", "MOON", "WRAP", "WRAP", ""]);
    await wait(700);
    setText(["MOON", "MOON", "WRAP", "WRAP", "Ͱ ΓΘͲω ͲχσΞ ϻσϜ."]);
    await wait(300);
    setText(["MOON", "MOON", "WRAP", "WRAP", "ͱ ΔΛͳϕ ͳψτΠ Єτϝ."]);
    await wait(300);
    setText(["MOON", "MOON", "WRAP", "WRAP", "A GIFT FROM YOU."]);
  }

  useEffect(() => {
    loading_animation();
  }, []); 

  return ( // gonna pick real main font later
    <div className="h-dvh w-100 flex justify-center text-color relative overflow-y-hidden">
          <img src={landing} className="absolute object-contain bottom-0"/>
          <div className="body flex flex-col items-center flex-nowrap z-10" >
            <div className=" h-auto w-100 flex justify-center mt-[21vh] mb-[-6vh] relative">
              <div className="text-[160px] moonwrap h-auto text-nohover absolute left-[-420px] z-[3]">
                {text[0]}
                <div className="absolute text-[16px] main-font text-[#BB6F63] text-center bottom-[60px] left-0 right-0 z-[4]">
                  <b>{text[1]}</b>
                </div>
              </div>
              <div className="w-[170px] h-[170px] bg-[#DAB0AA] border-[#BB6F63] border-[14px] rounded-[50%] z-[2] mb-[50px]">

              </div>
              <div className="text-[160px] moonwrap h-auto text-nohover absolute right-[-360px] z-[1]">
                {text[2]}
                <div className="absolute text-[16px] main-font text-[#BB6F63] text-center bottom-[60px] left-0 right-0 z-[4]">
                  <b>{text[3]}</b>
                </div>
              </div>
            </div>
            <div className="text-center moonwrap text-[45px] h-auto text-nohover relative">
              {text[4]}
            </div>
          </div>
    </div>
  );
};


export default Landing;
