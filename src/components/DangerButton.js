import React from "react";

function DangerButton(props) {
  const { width, height } = props;
  return (
    <svg
      id="General_Button_Danger_Light_Primary-Small"
      data-name="General/Button/Danger/Light/Primary-Small"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 24"
    >
      <rect id="rectangle" width="72" height="24" rx="2" fill="#ff4d4f" />
      <text
        id="Danger button"
        transform="translate(36 16)"
        fill="#fff"
        font-size="14"
        font-family="YuGothicUI-Regular, Yu Gothic UI"
      >
        <tspan x="-28" y="0">
        In danger
        </tspan>
        <tspan
          y="0"
          font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
        >
        risk
        </tspan>
        <tspan y="0">press</tspan>
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
export default DangerButton;
