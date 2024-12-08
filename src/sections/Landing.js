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
    <div className="h-dvh w-100 flex justify-center">
          <div className="body" >
            landing section
          </div>
    </div>
  );
};


export default Landing;
