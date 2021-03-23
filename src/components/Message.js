import React from "react";

const Message = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="350"
      height="123.648"
      viewBox="0 0 350 123.648"
    >
      <defs>
        <filter
          id="bg"
          x="0"
          y="0"
          width="350"
          height="123.648"
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
        id="Feedback_Message_Light_Success"
        data-name="Feedback/Message/Light/Success"
        transform="translate(42 33)"
      >
        <g transform="matrix(1, 0, 0, 1, -42, -33)" filter="url(#bg)">
          <rect
            id="bg-2"
            data-name="bg"
            width="266"
            height="39.648"
            rx="2"
            transform="translate(42 33)"
            fill="#fff"
          />
        </g>
        <text
          id="这是一条成功消息_会主动消失_"
          data-name="这是一条成功消息，会主动消失。"
          transform="translate(40 24.824)"
          fill="rgba(0,0,0,0.65)"
          font-size="14"
          font-family="PingFangSC-Regular, PingFang SC"
        >
          <tspan x="0" y="0">
            这是一条成功消息，会主动消失。
          </tspan>
        </text>
        <g
          id="Icon_Fill_Check-Circle-Fill"
          data-name="Icon/Fill/Check-Circle-Fill"
          transform="translate(16 11.824)"
        >
          <rect id="矩形" width="16" height="16" opacity="0" />
          <path
            id="形状"
            d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM4.078,6.378a.125.125,0,0,0-.1.2l1.948,2.7a.5.5,0,0,0,.808,0l3.29-4.562a.126.126,0,0,0-.1-.2H9.189a.5.5,0,0,0-.4.208L6.328,8.13,5.215,6.586a.5.5,0,0,0-.405-.208Z"
            transform="translate(1 1)"
            fill="#52c41a"
          />
        </g>
      </g>
    </svg>
  );
};
export default Message;
