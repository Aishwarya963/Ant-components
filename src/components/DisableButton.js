import React from "react";

function DisableButton(props) {
  const { width, height } = props;
  return (
    <svg
      id="General_Button_Dashed_Light_Small"
      data-name="General/Button/Dashed/Light/Small"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 24"
    >
      <g
        id="rectangle"
        fill="#fff"
        stroke="rgba(0,0,0,0.15)"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke-dasharray="3 2"
      >
        <rect width="72" height="24" rx="2" stroke="none" />
        <rect x="0.5" y="0.5" width="71" height="23" rx="1.5" fill="none" />
      </g>
      <text
        id="Dashed button"
        transform="translate(36 16)"
        fill="rgba(0,0,0,0.65)"
        font-size="14"
        font-family="YuGothicUI-Regular, Yu Gothic UI"
      >
        <tspan x="-28" y="0">
          Dashed button
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
export default DisableButton;
