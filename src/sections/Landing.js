import React from "react";
import '../App.css';


const Landing = ({primaryColor, secondaryColor}) => {
  // body class goes inside these divs
  // set body width to be .905 of parent
  const textColor = `text-[${primaryColor}]`;
  // style={{color: primaryColor}} for dynamic color
  // make content mostly not dependant on viewport so doesnt look weird when loading
  // at least just for this section

  // test w/ 1280x732, includes browser+bookmarks
  return ( // gonna pick real main font later
    <div className="h-dvh w-100 flex justify-center text-color">
          <div className="body flex flex-col items-center flex-nowrap" >
            <div className=" h-auto w-100 flex justify-center mt-[16vh] mb-[-6vh]">
              <div className="text-[160px] moonwrap h-auto text-nohover">
                MOON
              </div>
              <div className="w-[100px] h-[100px]">

              </div>
              <div className="text-[160px] moonwrap h-auto text-nohover">
                WRAP
              </div>
            </div>
            <div className="text-center moonwrap text-[45px] h-auto text-nohover">
              SUBTITLE GOES HERE
            </div>
          </div>
    </div>
  );
};


export default Landing;
