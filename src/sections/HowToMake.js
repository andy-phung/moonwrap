import React from "react";
import '../App.css';

import { useState, useEffect, useRef } from 'react';

import step1 from '../pics/step1.png';
import step2 from '../pics/step2.png';
import step3 from '../pics/step3.png';
import step4 from '../pics/step4.png';

import A from "../pics/prefolds/prefolds_A.png";
import B from "../pics/prefolds/prefolds_B.png";
import C from "../pics/prefolds/prefolds_C.png";
import D from "../pics/prefolds/prefolds_D.png";
import E from "../pics/prefolds/prefolds_E.png";
import F from "../pics/prefolds/prefolds_F.png";
import G from "../pics/prefolds/prefolds_G.png";
import H from "../pics/prefolds/prefolds_H.png";
import I from "../pics/prefolds/prefolds_I.png";
import J from "../pics/prefolds/prefolds_J.png";
import K from "../pics/prefolds/prefolds_K.png";
import L from "../pics/prefolds/prefolds_L.png";
import M from "../pics/prefolds/prefolds_M.png";
import N from "../pics/prefolds/prefolds_N.png";
import O from "../pics/prefolds/prefolds_O.png";
import P from "../pics/prefolds/prefolds_P.png";
import Q from "../pics/prefolds/prefolds_Q.png";
import R from "../pics/prefolds/prefolds_R.png";
import S from "../pics/prefolds/prefolds_S.png";
import T from "../pics/prefolds/prefolds_T.png";
import U from "../pics/prefolds/prefolds_U.png";
import V from "../pics/prefolds/prefolds_V.png";
import W from "../pics/prefolds/prefolds_W.png";
import X from "../pics/prefolds/prefolds_X.png";
import Y from "../pics/prefolds/prefolds_Y.png";
import Z from "../pics/prefolds/prefolds_Z.png";

import lower_A from "../pics/prefolds/prefolds_1a.png";
import lower_B from "../pics/prefolds/prefolds_1b.png";
import lower_C from "../pics/prefolds/prefolds_1c.png";
import lower_D from "../pics/prefolds/prefolds_1d.png";
import lower_E from "../pics/prefolds/prefolds_1e.png";
import lower_F from "../pics/prefolds/prefolds_1f.png";
import lower_G from "../pics/prefolds/prefolds_1g.png";
import lower_H from "../pics/prefolds/prefolds_1h.png";
import lower_I from "../pics/prefolds/prefolds_1i.png";
import lower_J from "../pics/prefolds/prefolds_1j.png";
import lower_K from "../pics/prefolds/prefolds_1k.png";
import lower_L from "../pics/prefolds/prefolds_1l.png";
import lower_M from "../pics/prefolds/prefolds_1m.png";
import lower_N from "../pics/prefolds/prefolds_1n.png";
import lower_O from "../pics/prefolds/prefolds_1o.png";
import lower_P from "../pics/prefolds/prefolds_1p.png";
import lower_Q from "../pics/prefolds/prefolds_1q.png";
import lower_R from "../pics/prefolds/prefolds_1r.png";
import lower_S from "../pics/prefolds/prefolds_1s.png";
import lower_T from "../pics/prefolds/prefolds_1t.png";
import lower_U from "../pics/prefolds/prefolds_1u.png";
import lower_V from "../pics/prefolds/prefolds_1v.png";
import lower_W from "../pics/prefolds/prefolds_1w.png";
import lower_X from "../pics/prefolds/prefolds_1x.png";
import lower_Y from "../pics/prefolds/prefolds_1y.png";
import lower_Z from "../pics/prefolds/prefolds_1z.png";

import step4_string from "../pics/string.png";


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
  const [interactiveFocus, setInteractiveFocus] = useState(false);
  const inputRef = useRef(null);

  const letter_map = {
    "A": A,
    "B": B,
    "C": C,
    "D": D,
    "E": E,
    "F": F,
    "G": G,
    "H": H,
    "I": I,
    "J": J,
    "K": K,
    "L": L,
    "M": M,
    "N": N,
    "O": O,
    "P": P,
    "Q": Q,
    "R": R,
    "S": S,
    "T": T,
    "U": U,
    "V": V,
    "W": W,
    "X": X,
    "Y": Y,
    "Z": Z,
    "a": lower_A,
    "b": lower_B,
    "c": lower_C,
    "d": lower_D,
    "e": lower_E,
    "f": lower_F,
    "g": lower_G,
    "h": lower_H,
    "i": lower_I,
    "j": lower_J,
    "k": lower_K,
    "l": lower_L,
    "m": lower_M,
    "n": lower_N,
    "o": lower_O,
    "p": lower_P,
    "q": lower_Q,
    "r": lower_R,
    "s": lower_S,
    "t": lower_T,
    "u": lower_U,
    "v": lower_V,
    "w": lower_W,
    "x": lower_X,
    "y": lower_Y,
    "z": lower_Z,
  }

  const uppercase_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercase_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const uppercase_letter_blocks = [];
  for (let i = 0; i < 26; i++) {
      uppercase_letter_blocks.push(<LetterBox onFocus={() => setInteractiveFocus(true)} onBlur={() => {setInteractiveFocus(false)}} letter={uppercase_letters[i]} selected={currentLetter} clickFunc={() => setCurrentLetter(uppercase_letters[i])} hoverEnterFunc={() => setHoverLetter(uppercase_letters[i])} hoverLeaveFunc={() => setHoverLetter(currentLetter)}/>);
  }

  const lowercase_letter_blocks = [];
  for (let i = 0; i < 26; i++) {
      lowercase_letter_blocks.push(<LetterBox onFocus={() => setInteractiveFocus(true)} onBlur={() => {setInteractiveFocus(false)}} letter={lowercase_letters[i]} selected={currentLetter} clickFunc={() => setCurrentLetter(lowercase_letters[i])} hoverEnterFunc={() => setHoverLetter(uppercase_letters[i])} hoverLeaveFunc={() => setHoverLetter(currentLetter)}/>);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {setInteractiveFocus(false); inputRef.current.blur();});
    //return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ( // this should take in name as a parameter
    // red string starts at step 4 pic, fix to top right of step 4 div
    <div className="flex justify-center text-color">
      <div className="body">

        <div className="w-100 flex justify-center">
          <div className="mt-[13vh] mb-[190px] w-100 h-auto second-width flex flex-none flex-wrap justify-between">
            <div className="min-w-[440px] h-[388px] mb-[10vh] relative">
              <div className="w-[92%] h-full absolute right-0">
                <div className="absolute left-[-62px] top-0 h-[50px] w-[50px] border-[#343434] border-[3.5px] rounded-[50%] flex justify-center items-center main-font text-[35px]">
                  1
                </div>
                <div className="h-[90%] w-100 relative">
                  <img src={step1} className="h-full aspect-square absolute left-0"/>
                </div>
                <div className="h-[10%] w-100 main-font text-[2.4vh] absolute bottom-[-10px]">
                  Start with the letter's prefold pattern.
                </div>
              </div>
              
            </div>
            <div className="min-w-[440px] h-[388px] mb-[10vh] relative">
              <div className="w-[92%] h-full absolute right-0">
                <div className="absolute left-[-62px] top-0 h-[50px] w-[50px] border-[#343434] border-[3.5px] rounded-[50%] flex justify-center items-center main-font text-[35px]">
                  2
                </div>
                <div className="h-[90%] w-100 relative">
                  <img src={step2} className="h-full aspect-square absolute left-0"/>
                </div>
                <div className="h-[10%] w-100 main-font text-[2.4vh] absolute bottom-[-10px]">
                  Place folded sides on top of the <i>bánh</i>.
                </div>
              </div>
            </div>
            <div className="min-w-[440px] h-[388px] relative">
              <div className="w-[92%] h-full absolute right-0">
                <div className="absolute left-[-62px] top-0 h-[50px] w-[50px] border-[#343434] border-[3.5px] rounded-[50%] flex justify-center items-center main-font text-[35px]">
                  3
                </div>
                <div className="h-[90%] w-100 relative">
                  <img src={step3} className="h-full aspect-square absolute left-0"/>
                </div>
                <div className="h-[10%] w-100 main-font text-[2.4vh] absolute bottom-[-10px]">
                  Pinch unfolded corners inwards until they touch the <i>bánh</i>.
                </div>
              </div>
            </div>
            <div className="min-w-[440px] h-[388px] relative">
              <div className="w-[92%] h-full absolute right-0">
                <div className="absolute left-[-62px] top-0 h-[50px] w-[50px] border-[#343434] border-[3.5px] rounded-[50%] flex justify-center items-center main-font text-[35px]">
                  4
                </div>
                <div className="h-[90%] w-full relative overflow-visible z-[0]">
                  <div className="absolute top-0 right-0 h-[3150px] w-[1090px]">
                    <img src={step4_string} className={(interactiveFocus ? "opacity-50 " : "") + "h-[3150px] aspect-auto absolute top-0 right-0 left-0 bottom-0"}/>
                  </div>
                  
                </div>
                <div className="h-[10%] w-[90%] main-font text-[2.4vh] absolute bottom-[-10px]">
                  Close unsealed gaps and tie off the parts that want to spring away.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 h-[300px] mb-[120px] flex justify-center relative z-[1]">
          <div className="second-width flex flex-col justify-between">
            <div className="w-[535px] text-[2.4vh] main-font">
              These wrapping rules are vague by design—every person will have their own interpretation of how each letter is formed.
            </div>
            <div className="w-[535px] text-[2.4vh] main-font text-right ml-auto">
              "Place folded sides on top of the <i>bánh</i>" might mean right in the middle of it, or to the edge of it, or something else entirely. Some may interpret "close unsealed gaps" as folding them over, or even twisting them shut.
            </div>
          </div>
        </div>

        <div className="w-100 h-[730px] mb-[25px] flex justify-center relative z-[1]">
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
            <div className="w-[750px] flex justify-center items-center relative">
              <div className="moonwrap text-nohover text-[500px] absolute right-[5%] bottom-[-20%] z-10">
                {currentLetter}
              </div>
              <div className="h-[81%] w-full relative">
                <div className="absolute left-[10%] h-[450px] aspect-square">
                  <img src={letter_map[currentLetter]}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 h-[275px] mb-[80px] flex justify-center relative z-[1]">
          <div className="second-width flex flex-col justify-between">
            <div className=" w-[560px] text-[2.4vh] main-font text-right ml-auto">
              This means that every person will have their own version of the MOONWRAP alphabet.
            </div>
            <div className=" w-[575px] text-[2.4vh] main-font">
              MOONWRAP was designed to translate the originality and sentimentality in the traditional process of hand-making <i>bánh tét</i> into a letterform—one that you can make your own.            </div>
          </div>
        </div>

        <div className="w-100 h-[680px] flex justify-center relative z-[1]">
          <div className="third-width h-100 flex justify-center items-center">
            <input ref={inputRef} onFocus={() => setInteractiveFocus(true)} onBlur={() => {setInteractiveFocus(false)}} type="text" spellcheck="false" placeholder="Chúc mừng năm mới!" className="hover-class-input bg-transparent w-[100%] h-[25vh] text-[9vw] moonwrap">
            </input>
          </div>
        </div>

        <div className="w-100 h-[480px] flex justify-center relative z-[1]">
          <div className="third-width">
            <div className="w-[575px] text-[2.4vh] main-font">
              Just as a <i>bánh tét</i> made by your parents is more special than one bought from a shop, a MOONWRAP letter is made unique by you, the person who wrapped it.
            </div>
          </div>
        </div>

      </div>  
    </div>
  );
};


export default HowToMake;
