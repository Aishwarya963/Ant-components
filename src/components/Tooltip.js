import React from "react";

const Tooltip = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="212"
      height="122"
      viewBox="0 0 212 122"
    >
      <defs>
        <filter
          id="形状结合"
          x="0"
          y="0"
          width="212"
          height="122"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="9" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feFlood flood-opacity="0.051" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="DataDisplay_Tooltip_Light_Up_"
        data-name="DataDisplay/Tooltip/Light/Up⬆️"
        transform="translate(42 33)"
      >
        <g transform="matrix(1, 0, 0, 1, -42, -33)" filter="url(#形状结合)">
          <path
            id="形状结合-2"
            data-name="形状结合"
            d="M2,38a2,2,0,0,1-2-2V8A2,2,0,0,1,2,6H59l4.964-6L69,6h57a2,2,0,0,1,2,2V36a2,2,0,0,1-2,2Z"
            transform="translate(42 33)"
            fill="rgba(0,0,0,0.75)"
          />
        </g>
        <text
          id="Text"
          transform="translate(8 12)"
          fill="#fff"
          font-size="14"
          font-family="PingFangSC-Regular, PingFang SC"
        >
          <tspan x="-56" y="15">
            悬浮出现的气泡。
          </tspan>
        </text>
      </g>
    </svg>
  );
};
export default Tooltip;
