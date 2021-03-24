import React from "react";

function GhostButton(props) {
  const { width, height } = props;
  return (
    <svg
      id="General_Button_Ghost_Light_Small"
      data-name="General/Button/Ghost/Light/Small"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 24"
    >
      <rect
        id="_1.General_1.Buttons button_ghost button_bright color_small_background"
        data-name="1.General/1.Buttons button/ghost button/bright color/small background"
        width="72"
        height="24"
        fill="none"
      />
      <g
        id="rectangle"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        stroke-miterlimit="10"
        stroke-width="1"
      >
        <rect width="72" height="24" rx="2" stroke="none" />
        <rect x="0.5" y="0.5" width="71" height="23" rx="1.5" fill="none" />
      </g>
      <text
        id="Ghost button"
        transform="translate(36 16)"
        fill="rgba(255,255,255,0.65)"
        font-size="14"
        font-family="YuGothicUI-Regular, Yu Gothic UI"
      >
        <tspan x="-28" y="0">
        Ghost press
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
export default GhostButton;
