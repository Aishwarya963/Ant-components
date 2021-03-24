import React from "react";

function Badge(props) {
  const { width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
    >
      <g
        id="DataDisplay_Badge_Light_Default"
        data-name="DataDisplay/Badge/Light/Default"
        transform="translate(1 1)"
      >
        <g id="Group">
          <g
            id="rectangle"
            fill="#ff4d4f"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1"
          >
            <rect width="20" height="20" rx="10" stroke="none" />
            <rect
              x="-0.5"
              y="-0.5"
              width="21"
              height="21"
              rx="10.5"
              fill="none"
            />
          </g>
          <text
            id="Text"
            transform="translate(10 15)"
            fill="#fff"
            fontSize="12"
          >
            <tspan x="-3.6" y="0">
              5
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

export default Badge;
