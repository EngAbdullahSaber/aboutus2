import React from "react";
import logo1 from "../../images/Rectangle (3).png";
import polygon from "../../images/Polygon 1.png";
import vector from "../../images/Vector.png";
const Navbar = () => {
  return (
    <div className="  bg-[#222222]">
      <div className="flex justify-between container  mx-auto items-center py-2">
        <div className="flex  items-center text-white">
          <img src={logo1} alt="logo" />
          <img src={polygon} alt="logo" className="px-2" />
          <img src={vector} alt="logo" />
          <span className="px-2 font-medium text-white"> تسجيل الدخول</span>
          <span className="px-1">|</span>
          <span className="px-2 font-bold text-white"> En</span>
        </div>
        <div className="text-base font-medium text-white ">
          <span className="px-2">طرق اخري للتبرع</span>
          <span className="px-1">|</span>
          <span className="px-2"> حساباتنا في البنوك </span>
          <span className="px-1">|</span>
          <span className="px-2"> فروعنا</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
