import React from "react";
import banner from "../../images/Rectangle 11 (1).png";
import overlay from "../../images/Rectangle 41.png";
import backOver from "../../images/Rectangle 239.png";
import logo from "../../images/Rectangle (2).png";
const AboutBanner = () => {
  return (
    <div className="relative my-10 mt-32">
      <img src={banner} alt="banner" className="" />
      <img
        src={overlay}
        alt="overlay"
        className="h-full w-full absolute top-0 left-0"
      />
      <div className="absolute top-0 h-full w-full overflow-hidden">
        <img src={backOver} alt=" text overlay" className="mx-auto relative" />
        <div className="absolute top-3 left-[8%]">
          <h2 className="text-center text-5xl font-black text-white  mt-4">
            <img src={logo} alt="logo" className="inline-block mx-1" />
            رسالة الجمعية
          </h2>
          <p className="text-center text-white text-3xl font-medium">
            تقديم خدمات خيرية نوعية غير تقليدية تستهدف خلال مدى زمني محدد
            الإنتقال بالشرائح <br />
            المحتاجة من دائرة الإحتياج إلى دائرة الإنتاج والإكتفاء.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
