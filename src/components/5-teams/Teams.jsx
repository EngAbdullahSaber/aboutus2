import React from "react";
import profile from "../../images/Ellipse 24.png";
import linked from "../../images/Vector (1).png";
import face from "../../images/Vector (2).png";
import insta from "../../images/Vector44.png";
import xx from "../../images/Layer_1.png";

const Teams = () => {
  const teams1 = [
    {
      index: 1,
      title: "ا/ أحمد أسامة محمد الجندي",
      jobs: "  رئيس مجلس الإدارة",
    },
    {
      index: 2,
      title: "ا/ محمد محب أنور توفيق عبد الرازق",
      jobs: " نائب رئيس مجلس الإدارة",
    },
    {
      index: 3,
      title: "م/ محمد عادل محمد عبد المنعم زغلول",
      jobs: " أمين الصندوق المهندس",
    },
  ];
  const teams2 = [
    {
      index: 1,
      title: "م /محمد أحمد طلعت محمد عزيز",
      jobs: "السكرتير العام ",
    },
    {
      index: 2,
      title: "م/ حسام الدين أحمد عبد الحليم القبانى",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 3,
      title: "د/ محمد خالد حسين طه النوري",
      jobs: "عضو مجلس الإدارة",
    },
  ];
  const teams3 = [
    {
      index: 1,
      title: "م/ محمد عاصم محمد عبد الرحمن إمام",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 2,
      title: "ا/ أحمد حسام الدين أحمد عبد الحليم",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 3,
      title: "ا/ محمد مصطفى كمال محمد جاد",
      jobs: "عضو مجلس الإدارة",
    },
  ];
  return (
    <div className="teams container mx-auto ">
      <h2 className="py-9">أعضاء مجلس الإدارة</h2>
      <div className="flex flex-row justify-between mt-4">
        {teams1.map((items) => (
          <div className="shadow-lg rounded-lg p-3 w-80" key={items.index}>
            <img src={profile} alt="person photo" className="mx-auto my-3" />
            <h3 className="text-[#201a1a] font-bold text-xl my-3">
              {items.title}
            </h3>
            <p className="text-[#8E8E8E] font-bold text-xl my-3">
              {" "}
              {items.jobs}
            </p>
            <ul className="flex flex-row justify-between w-40 my-6 mx-auto">
              <li>
                <img src={linked} alt="icons" />
              </li>
              <li>
                <img src={insta} alt="icons" />
              </li>
              <li>
                <img src={face} alt="icons" />
              </li>
              <li>
                <img src={xx} alt="icons" />
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between mt-4">
        {teams2.map((items) => (
          <div className="shadow-lg rounded-lg p-3 w-80" key={items.index}>
            <img src={profile} alt="person photo" className="mx-auto my-3" />
            <h3 className="text-[#201a1a] font-bold text-xl my-3">
              {items.title}
            </h3>
            <p className="text-[#8E8E8E] font-bold text-xl my-3">
              {" "}
              {items.jobs}
            </p>
            <ul className="flex flex-row justify-between w-40 my-6 mx-auto">
              <li>
                <img src={linked} alt="icons" />
              </li>
              <li>
                <img src={insta} alt="icons" />
              </li>
              <li>
                <img src={face} alt="icons" />
              </li>
              <li>
                <img src={xx} alt="icons" />
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between mt-4">
        {teams3.map((items) => (
          <div className="shadow-lg rounded-lg p-3 w-80" key={items.index}>
            <img src={profile} alt="person photo" className="mx-auto my-3" />
            <h3 className="text-[#201a1a] font-bold text-xl my-3">
              {items.title}
            </h3>
            <p className="text-[#8E8E8E] font-bold text-xl my-3">
              {" "}
              {items.jobs}
            </p>
            <ul className="flex flex-row justify-between w-40 my-6 mx-auto">
              <li>
                <img src={linked} alt="icons" />
              </li>
              <li>
                <img src={insta} alt="icons" />
              </li>
              <li>
                <img src={face} alt="icons" />
              </li>
              <li>
                <img src={xx} alt="icons" />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
