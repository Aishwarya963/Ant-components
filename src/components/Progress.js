import React from "react";

const Progress = () => {
  return (
    <svg
      id="Feedback_Progress_Light_Bar"
      data-name="Feedback/Progress/Light/Bar"
      xmlns="http://www.w3.org/2000/svg"
      width="358"
      height="22"
      viewBox="0 0 358 22"
    >
      <text
        id="Text"
        transform="translate(327 16)"
        fill="rgba(0,0,0,0.45)"
        font-size="14"
        font-family="PingFangSC-Regular, PingFang SC"
      >
        <tspan x="0" y="0">
          50%
        </tspan>
      </text>
      <g id="Bar" transform="translate(0 8)">
        <rect
          id="Rectangle_57_Copy_5"
          data-name="Rectangle 57 Copy 5"
          width="320"
          height="8"
          rx="4"
          fill="rgba(0,0,0,0.04)"
        />
        <rect
          id="Rectangle_57_Copy"
          data-name="Rectangle 57 Copy"
          width="168"
          height="8"
          rx="4"
          fill="#1890ff"
        />
      </g>
    </svg>
  );
};
export default Progress;
