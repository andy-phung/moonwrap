import React from "react";
import '../App.css';

const Intro = ({primaryColor, secondaryColor}) => {
  return ( // this should take in name as a parameter
    <div className="flex justify-center text-color">
        <div className="body">

          <div className="max-w-100 min-h-10 text-[2.4vh] main-font flex flex-wrap justify-between mt-[7.33vh]">
            <div className="min-h-10 w-[650px]">
            As legend has it, the poorest prince of the <i>Hồng Bàng</i> dynasty in Vietnam won the right to the throne by creating <i>bánh tét</i>, a sticky rice cake wrapped in banana leaves that was praised for being delicious despite being simple.
            <br/><br/>
            In modern times, <i>bánh tét</i> is traditionally made by families to celebrate <i>tết</i>, or Vietnamese lunar new year. The few number of steps involved means that anyone in the family can help make it, no matter how young or old.
            <br/><br/>
            Inspired by this beauty in simplicity, MOONWRAP is an exploration in generative type, where letters emerge from only simple wrapping rules and the placement of the <i>bánh tét</i>.
            </div>
            <div className="min-h-10 w-[434px]">
              pic (svg)
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
                Xuân đã về, xuân đã về
              </div>
              <div className="moonwrap text-[5.65cqw] mt-[-7.5vh]">
                Ngàn hoa hé môi cười tươi đón gió mới
              </div>
              <div className="moonwrap text-[9.85cqw] mt-[-6vh]">
                Xuân đã về, xuân đã về
              </div>
              <div className="moonwrap text-[5.6cqw] mt-[-7vh]">
                Ta hát vang lên câu ca mừng chào xuân
              </div>
            </div>    
          </div>
          <div className="w-100 h-[30vw] mt-[17vh] mb-[19.8vh] flex justify-center">
            <div className="border-4 border-black second-width h-100 flex justify-between">
              <div className="border-4 border-blue-500 h-[377px] w-[400px]">
                detail 1
              </div>
              <div className="border-4 border-blue-500 h-[377px] w-[400px]">
                detail 2
              </div>
              <div className="border-4 border-blue-500 h-[377px] w-[400px]">
                detail 3
              </div>
            </div>
          </div>
          
        </div>
    </div>
  );
};


export default Intro;
