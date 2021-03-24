import React from "react";

function TextButton(props) {
  const { width, height } = props;
  return (
    <svg
      id="General_Button_Text_Light_Small"
      data-name="General/Button/Text/Light/Small"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 24"
    >
      <text
        id="Text button"
        transform="translate(8 16)"
        fill="#1890ff"
        font-size="14"
        font-family="YuGothicUI-Regular, Yu Gothic UI"
      >
        <tspan x="0" y="0">
        Text press

        </tspan>
        <tspan
          y="0"
          font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
        >
        button
        </tspan>
      </text>
    </svg>
  );
}
export default TextButton;
