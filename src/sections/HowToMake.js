import React from "react";
import '../App.css';

import { useState, useEffect } from 'react';

const LetterBox = ({letter, selected, clickFunc, hoverEnterFunc, hoverLeaveFunc}) => {
  const classname = (selected === letter ? "letterbox-selected " : "") + "text-nohover hover-class mb-[4px] mr-[4px] outline outline-[#343434] outline-4 main-font text-color m-0 w-[35px] h-[35px] flex justify-center items-center"
  console.log(classname);
  return (
    <li onMouseDown={clickFunc} className={classname}><b>{letter}</b></li>
  )
}

// 2.4vh, 2.4vh?
const HowToMake = ({primaryColor, secondaryColor}) => {
  const [currentLetter, setCurrentLetter] = useState("A");
  const [hoverLetter, setHoverLetter] = useState("A");

  const uppercase_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercase_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const uppercase_letter_blocks = [];
  for (let i = 0; i < 26; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      uppercase_letter_blocks.push(<LetterBox letter={uppercase_letters[i]} selected={currentLetter} clickFunc={() => setCurrentLetter(uppercase_letters[i])} hoverEnterFunc={() => setHoverLetter(uppercase_letters[i])} hoverLeaveFunc={() => setHoverLetter(currentLetter)}/>);
  }

  const lowercase_letter_blocks = [];
  for (let i = 0; i < 26; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      lowercase_letter_blocks.push(<LetterBox letter={lowercase_letters[i]} selected={currentLetter} clickFunc={() => setCurrentLetter(lowercase_letters[i])} hoverEnterFunc={() => setHoverLetter(uppercase_letters[i])} hoverLeaveFunc={() => setHoverLetter(currentLetter)}/>);
  }

  return ( // this should take in name as a parameter
    // red string starts at step 4 pic, fix to top right of step 4 div
    <div className="flex justify-center text-color">
      <div className="body">

        <div className="w-100 flex justify-center">
          <div className="mt-[13vh] mb-[190px] w-100 h-auto border-black border-4 second-width flex flex-none flex-wrap justify-between">
            <div className="border-blue-500 border-4 min-w-[440px] h-[388px] mb-[10vh]">
              step 1
            </div>
            <div className="border-blue-500 border-4 min-w-[440px] h-[388px] mb-[10vh]">
              step 2
            </div>
            <div className="border-blue-500 border-4 min-w-[440px] h-[388px]">
              step 3
            </div>
            <div className="border-blue-500 border-4 min-w-[440px] h-[388px]">
              step 4
            </div>
          </div>
        </div>

        <div className="w-100 h-[350px] mb-[120px] flex justify-center">
          <div className="second-width flex flex-col justify-between">
            <div className="w-[535px] text-[2.4vh] main-font">
              These wrapping rules are vague by design—every person will have their own interpretation of how each letter is formed.
            </div>
            <div className="w-[535px] text-[2.4vh] main-font text-right ml-auto">
              "Place edges on top of the bánh" might mean right in the middle of it, or to the edge of it, or something else entirely. Some may interpret "close unsealed gaps" as folding them over, or even twisting them shut.
            </div>
          </div>
        </div>

        <div className="w-100 h-[730px] mb-[90px] flex justify-center">
          <div className="second-width flex h-100 flex-row flex-nowrap justify-between">
            <div className="w-[125px] h-100 flex items-center flex-nowrap">
              <div className="h-[80%] w-[80%]">
                <ul className="h-full w-full flex flex-col flex-wrap content-start justify-start items-start">
                  {uppercase_letter_blocks}
                </ul>
              </div>
            </div>
            <div className="w-[125px] h-100 flex items-center flex-nowrap">
            <div className="h-[80%] w-[80%]">
                <ul className="h-full w-full flex flex-col flex-wrap content-start justify-start items-start">
                  {lowercase_letter_blocks}
                </ul>
              </div>
            </div>
            <div className="border-blue-400 border-4 w-[750px] flex justify-center items-center relative">
              <div className="border-black border-4 moonwrap text-nohover text-[500px] absolute right-0 bottom-[-30%]">
                {currentLetter}
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 h-[300px] mb-[120px] flex justify-center">
          <div className="second-width flex flex-col justify-between">
            <div className=" w-[560px] text-[2.4vh] main-font text-right ml-auto">
              This means that every person will have their own version of the MOONWRAP alphabet.
            </div>
            <div className=" w-[575px] text-[2.4vh] main-font">
              MOONWRAP was designed to translate that originality, sentimentality, and personality in the traditional process of hand-making bánh tét into a letterform—one that you can make your own.            </div>
          </div>
        </div>

        <div className="w-100 h-[730px] flex justify-center">
          <div className="third-width h-100 flex justify-center items-center">
            <input type="text" spellcheck="false" placeholder="Chúc mừng năm mới!" className="bg-color w-[100%] h-[25vh] text-[9vw] moonwrap">
            </input>
          </div>
        </div>

        <div className="w-100 h-[525px] mb-[175px] flex justify-center">
          <div className="third-width">
            <div className="w-[575px] text-[2.4vh] main-font">
              Just as a bánh tét made lovingly by your parents is more special than one bought from a shop, a MOONWRAP letter is made unique by you, the person who wrapped it.
            </div>
          </div>
        </div>

      </div>  
    </div>
  );
};


export default HowToMake;
