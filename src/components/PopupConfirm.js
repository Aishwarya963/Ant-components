import React from "react";

const PopupConfirm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="256"
      height="177"
      viewBox="0 0 256 177"
    >
      <defs>
        <filter
          id="形状结合"
          x="0"
          y="0"
          width="256"
          height="177"
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
        id="Feedback_Popconfirm_Light_TL"
        data-name="Feedback/Popconfirm/Light/⬇️TL"
        transform="translate(42 33)"
      >
        <g transform="matrix(1, 0, 0, 1, -42, -33)" filter="url(#形状结合)">
          <path
            id="形状结合-2"
            data-name="形状结合"
            d="M16,87H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H170a2,2,0,0,1,2,2V85a2,2,0,0,1-2,2H26l-5,6Z"
            transform="translate(42 33)"
            fill="#fff"
          />
        </g>
        <text
          id="Title"
          transform="translate(40 29)"
          fill="rgba(0,0,0,0.65)"
          font-size="14"
          font-family="PingFangSC-Regular, PingFang SC"
        >
          <tspan x="0" y="0">
            你确定要关闭吗？
          </tspan>
        </text>
        <g
          id="General_Button_Primary_Light_Small"
          data-name="General/Button/Primary/Light/Small"
          transform="translate(107 47)"
        >
          <rect id="矩形" width="49" height="24" rx="2" fill="#1890ff" />
          <text
            id="主按钮"
            transform="translate(24.5 17)"
            fill="#fff"
            font-size="14"
            font-family="PingFangSC-Regular, PingFang SC"
          >
            <tspan x="-16.331" y="0">
              确 定
            </tspan>
          </text>
        </g>
        <g
          id="General_Button_Default_Light_Small"
          data-name="General/Button/Default/Light/Small"
          transform="translate(50 47)"
        >
          <g
            id="矩形-2"
            data-name="矩形"
            fill="#fff"
            stroke="rgba(0,0,0,0.15)"
            stroke-miterlimit="10"
            stroke-width="1"
          >
            <rect width="49" height="24" rx="2" stroke="none" />
            <rect x="0.5" y="0.5" width="48" height="23" rx="1.5" fill="none" />
          </g>
          <text
            id="次按钮"
            transform="translate(24.5 17)"
            fill="rgba(0,0,0,0.65)"
            font-size="14"
            font-family="PingFangSC-Regular, PingFang SC"
          >
            <tspan x="-16.331" y="0">
              取 消
            </tspan>
          </text>
        </g>
        <g
          id="Icon_Warning"
          data-name="Icon/Warning"
          transform="translate(16 16)"
        >
          <rect
            id="矩形-3"
            data-name="矩形"
            width="16"
            height="16"
            opacity="0"
          />
          <path
            id="形状"
            d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM7,9a.75.75,0,1,0,.75.75A.751.751,0,0,0,7,9ZM6.625,3.5a.125.125,0,0,0-.125.125v4.25A.125.125,0,0,0,6.625,8h.75A.125.125,0,0,0,7.5,7.875V3.625A.125.125,0,0,0,7.375,3.5Z"
            transform="translate(1 1)"
            fill="#faad14"
          />
        </g>
      </g>
    </svg>
  );
};
export default PopupConfirm;
