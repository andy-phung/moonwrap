import React from "react";
import '../App.css';

//prev 2.4vh

const Footer = ({primaryColor, secondaryColor}) => {
  return ( // this should take in name as a parameter
    <div className="h-[42vh] bg-color-text flex justify-center items-center" style={{backgroundColor: primaryColor}}>
      <div className="h-[66%] body text-[2.4vh] main-font flex items-center">
        <div className="w-[48%]">
          Created for <a target="_blank" rel="noopener noreferrer" className="underline" href="https://architecture.mit.edu/classes/visual-communication-fundamentals-1">4.053 Visual Communication Fundamentals</a>
          <br/><br/>
          Special thanks to Jessica Zheng for contributing her version of this typeface, and to Bo-Won Keum, T. Logan King, and my classmates for a fun semester together 🫶
          <br/><br/>
          Andy Phung
          <br/>
          <a target="_blank" rel="noopener noreferrer" className="underline" href="mailto:phunga@mit.edu">phunga@mit.edu</a>
        </div>    
      </div>  
    </div>
  );
};


export default Footer;
