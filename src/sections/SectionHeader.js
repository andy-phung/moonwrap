import React from "react";
import '../App.css';

const SectionHeader = ({primaryColor, secondaryColor, sectionName}) => {
  // 11.5% of vh
  return ( // this should take in name as a prop
    <div className="h-[11.5vh] w-100 flex justify-center" style={{backgroundColor: primaryColor}}>
      <div className="body flex items-center section-header-font bg-color-text section-header-misc">
        <div className="text-[7.5vh] whitespace-nowrap overflow-hidden flex">
          {sectionName}
        </div>
      </div>  
    </div>
  );
};


export default SectionHeader;
