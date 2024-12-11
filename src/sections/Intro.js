import React from "react";
import '../App.css';

import detail1 from '../pics/detail1.png';
import detail2 from '../pics/detail2.png';
import detail3 from '../pics/detail3.png';

import banhtet from '../pics/banhtet.png';

const Intro = ({primaryColor, secondaryColor}) => {
  return ( // this should take in name as a parameter
    <div className="flex justify-center text-color">
        <div className="body">

          <div className="max-w-100 min-h-10 text-[2.4vh] main-font flex flex-wrap justify-between mt-[7.33vh]">
            <div className="min-h-10 w-[600px]">
            According to legend, the poorest prince of the <i>Hồng Bàng</i> dynasty in Vietnam won the right to the throne by creating <i>bánh tét</i>, a sticky rice cake wrapped in banana leaves. It was renowned for being delicious despite using just three ingredients—mung bean, pork, and sticky rice.
            <br/><br/>
            In modern times, <i>bánh tét</i> is traditionally made by families to celebrate <i>tết</i>, or Vietnamese lunar new year. The few number of steps involved means that anyone in the family can help make it, no matter how young or old.
            <br/><br/>
            Inspired by the simplicity of this tradition, MOONWRAP is an exploration in generative type, where letters emerge from only simple wrapping rules and the placement of the <i>bánh tét</i>.
            </div>
            <div className="min-h-10 w-[520px] relative flex justify-center">
              <img src={banhtet} className="h-full w-full"/>
            </div>
          </div>

          <div className="w-100 h-[27vw] mt-[18vh]">
            <div className="main-font text-[2.4vh]">
              Moonwrap AP
            </div>
            <div className="flex flex-col items-center container-def text-nohover">
              <div className="moonwrap text-[9.85cqw] mt-[-2.5vh]">
                Xuân đã về, xuân đã về
              </div>
              <div className="moonwrap text-[5.65cqw] mt-[-7.5vh]">
                Kìa bao ánh xuân về tràn lan mênh mang
              </div>
              <div className="moonwrap text-[7cqw] mt-[-5.5vh]">
                Trên cánh đồng, chim hót mừng
              </div>
              <div className="moonwrap text-[5.25cqw] mt-[-5.5vh]">
                Đang thươt tha từng đàn tung bay vui say
              </div>
            </div>    
          </div>
          <div className="w-100 h-[27vw] mt-[8vh]">
            <div className="main-font text-[2.4vh]">
              Moonwrap JZ
            </div>
            <div className="flex flex-col items-center container-def text-nohover">
              <div className="moonwrap text-[9.85cqw] mt-[-2.5vh]">
                ®üǡn đą về, ±üân đą về
              </div>
              <div className="moonwrap text-[5.3cqw] mt-[-7.5vh]">
                Ñgän °öa °é m»i ćµời ṭµơi đ¬n gi¬ mªi
              </div>
              <div className="moonwrap text-[9.85cqw] mt-[-6vh]">
                ®üǡn đą về, ±üǡn đą về
              </div>
              <div className="moonwrap text-[5.45cqw] mt-[-7vh]">
                Ťa °ȁt vāng lên ćǡü ćā mừng ćhäo ±üǡn
              </div>
            </div>    
          </div>
          <div className="w-100 h-[30vw] mt-[17vh] mb-[19.8vh] flex justify-center">
            <div className="second-width h-100 flex justify-between">
              <div className="h-[377px] w-[400px] flex justify-center items-center">
                <img src={detail1} className="h-full"/>
              </div>
              <div className="h-[377px] w-[400px] flex justify-center items-center">
                <img src={detail2} className="h-full"/>
              </div>
              <div className="h-[377px] w-[400px] flex justify-center items-center">
                <img src={detail3} className="h-full"/>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  );
};


export default Intro;
