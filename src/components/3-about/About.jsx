import React from "react";
import aboutImage1 from "../../images/Rectangle 11.png";
import aboutImage2 from "../../images/Rectangle 12.png";
import companyName from "../../images/Rectangle.png";

const About = () => {
  return (
    <div className="flex flex-row container mx-auto my-10">
      <div className="relative w-[50%]">
        <img src={aboutImage1} alt="about first image" className="h-96" />
        <img
          src={aboutImage2}
          alt="about second image"
          className="z-30 h-80 absolute top-44 left-48"
        />
      </div>
      <div className="w-[50%] flex flex-col justify-end items-end">
        <img src={companyName} alt="company name " className="my-6" />
        <p className="text-[#343A40] text-xl font-medium">
          منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على
          التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن
          الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني أو
          سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات
          اقتصاديًا واجتماعيًا. تعتمد الجمعية في تمويلها على التبرعات العينية
          والنقدية من المصريين داخل مصر وخارجها.
        </p>
      </div>
    </div>
  );
};

export default About;
