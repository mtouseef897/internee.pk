import React from "react";

const CtaButton = ({link="https://internee.pk/web-design.html", type = "primary", text }) => {
  return (
    <a
      href={link}
      className={`border font-semibold text-[16px] rounded-full px-6 py-2 ${type==="primary"?"bgGradient text-white":"border-darkGreen text-darkGreen bgGradienthover"} capitalize`}
    >
      {text}
    </a>
  );
};

export default CtaButton;
