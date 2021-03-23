import React from "react";

const Button = (props) => {
  return (
    <svg
      id="General_Button_Primary_Light_Small"
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="24"
      viewBox="0 0 58 24"
    >
      <rect id="rectangle" width="58" height="24" rx="2" fill="#1890ff" />
      <text
        id="mainBUtton"
        transform="translate(29 17)"
        fill="#fff"
        fontSize="14"
      >
        <tspan x="-21" y="0">
          {props.children}
        </tspan>
      </text>
    </svg>
  );
};

export default Button;
