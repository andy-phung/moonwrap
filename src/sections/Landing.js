import React from "react";
import '../App.css';

import landing from '../pics/landing.png';


const Landing = ({primaryColor, secondaryColor}) => {
  // body class goes inside these divs
  // set body width to be .905 of parent
  const textColor = `text-[${primaryColor}]`;
  // style={{color: primaryColor}} for dynamic color
  // make content mostly not dependant on viewport so doesnt look weird when loading
  // at least just for this section

  // test w/ 1280x732, includes browser+bookmarks
  return ( // gonna pick real main font later
    <div className="h-dvh w-100 flex justify-center text-color relative">
          <img src={landing} className="absolute h-full"/>
          <div className="body flex flex-col items-center flex-nowrap z-10" >
            <div className=" h-auto w-100 flex justify-center mt-[21vh] mb-[-6vh] relative">
              <div className="text-[160px] moonwrap h-auto text-nohover absolute left-[-420px] z-[3]">
                MOON
                <div className="absolute text-[16px] main-font text-[#BB6F63] text-center bottom-[60px] left-0 right-0 z-[4]">
                  <b>MOON</b>
                </div>
              </div>
              <div className="w-[170px] h-[170px] bg-[#DAB0AA] border-[#BB6F63] border-[14px] rounded-[50%] z-[2] mb-[50px]">

              </div>
              <div className="text-[160px] moonwrap h-auto text-nohover absolute right-[-360px] z-[1]">
                WRAP
                <div className="absolute text-[16px] main-font text-[#BB6F63] text-center bottom-[60px] left-0 right-0 z-[4]">
                  <b>WRAP</b>
                </div>
              </div>
            </div>
            <div className="text-center moonwrap text-[45px] h-auto text-nohover relative">
              A GIFT FROM YOU.
            </div>
          </div>
    </div>
  );
};


export default Landing;
