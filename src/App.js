import './App.css';

import Landing from "./sections/Landing.js";
import SectionHeader from "./sections/SectionHeader.js";
import Intro from "./sections/Intro.js";
import HowToMake from "./sections/HowToMake.js";
import Footer from "./sections/Footer.js";

function App() {
  const primaryColor = "#BB6F63";
  const secondaryColor = "#DAB0AA";

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
