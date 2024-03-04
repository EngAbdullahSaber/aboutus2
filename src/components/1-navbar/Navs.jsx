import React from "react";
import vector2 from "../../images/Vector2.png";
import logo from "../../images/Rectangle (1).png";
import polygon from "../../images/Polygon 1.png";

function Navs() {
  return (
    <div className="flex flex-row  justify-between items-center container  mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex flex-row my-1">
          <button className="w-36 h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold ">
            إتبرع الأن{" "}
          </button>
          <button className="w-36 h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold mx-1 ">
            حقق الحلم
          </button>
        </div>
        <button className="w-72 h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold my-1 ">
          حقق الحلم
          <img src={vector2} alt="icon" className="inline-block mx-2" />
        </button>
      </div>
      <div>
        <ul className=" " dir="rtl">
          <li className="inline-block px-2 text-[#222222] font-medium text-xl">
            الصفحة الرئيسية
          </li>
          <li className="inline-block px-2 text-[#222222] font-medium text-xl ">
            <img src={polygon} alt="icon more " className="inline-block px-1" />
            انشطة الأورمان
          </li>
          <li className="inline-block text-[#222222] px-2  font-bold text-xl   border-b-2 py-2 border-[#FFC107] ">
            عن الأورمان
          </li>
          <li className="inline-block px-2 text-[#222222] font-medium text-xl">
            أخبارنا
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="logo" />{" "}
      </div>
    </div>
  );
}

export default Navs;
