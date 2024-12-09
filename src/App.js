import './App.css';

import Landing from "./sections/Landing.js";
import SectionHeader from "./sections/SectionHeader.js";
import Intro from "./sections/Intro.js";
import HowToMake from "./sections/HowToMake.js";
import Footer from "./sections/Footer.js";

import { useState, useEffect } from 'react';

function App() {
  let [primaryColor, setPrimaryColor] = useState('');
  let [secondaryColor, setSecondaryColor] = useState('');

  const colors = {
    "red": ["#BB6F63", "#DAB0AA"],
    "purple": ["#A56D6E", "#D8C0C1"]
  }
  const colors_keys = Object.keys(colors);

  useEffect(() => {
    let random_key = colors_keys[Math.floor(Math.random() * colors_keys.length)];
    setPrimaryColor(colors[random_key][0]);
    setSecondaryColor(colors[random_key][1]);
  });

  primaryColor = "#BB6F63";
  secondaryColor = "#DAB0AA";

  const sn1 = "RICE CAKE AS TYPEFACE";
  const sn2 = "HOW TO MAKE";

  // lmaoo there has to be a better way to do this
  // idrc rn tho

  return ( 
    <div className='bg-color'> 
      <Landing primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      <SectionHeader primaryColor={primaryColor} secondaryColor={secondaryColor} sectionName={sn1}/>
      <Intro primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      <SectionHeader primaryColor={primaryColor} secondaryColor={secondaryColor} sectionName={sn2}/>
      <HowToMake primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      <Footer primaryColor={primaryColor} secondaryColor={secondaryColor}/>
    </div>
  );
}

export default App;
