import React from "react";

const Notification = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="468"
      height="204"
      viewBox="0 0 468 204"
    >
      <defs>
        <filter
          id="bg_"
          x="0"
          y="0"
          width="468"
          height="204"
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
        id="Feedback_Modal_Light_Notification"
        data-name="Feedback/Modal/Light/Notification"
        transform="translate(42 33)"
      >
        <g transform="matrix(1, 0, 0, 1, -42, -33)" filter="url(#bg_)">
          <rect
            id="bg_2"
            data-name="bg "
            width="384"
            height="120"
            rx="4"
            transform="translate(42 33)"
            fill="#fff"
          />
        </g>
        <text
          id="_Description"
          data-name="↳ Description"
          transform="translate(24 53)"
          fill="rgba(0,0,0,0.65)"
          font-size="14"
          font-family="PingFangSC-Regular, PingFang SC"
        >
          <tspan x="0" y="15">
            一系列的信息描述，可能会很长。也可以是很短同样也
          </tspan>
          <tspan x="0" y="37">
            可以带标点。
          </tspan>
        </text>
        <text
          id="Title"
          transform="translate(24 34)"
          fill="rgba(0,0,0,0.85)"
          font-size="16"
          font-family="PingFangSC-Medium, PingFang SC"
          font-weight="500"
        >
          <tspan x="0" y="0">
            通知信息标题
          </tspan>
        </text>
        <g id="Icon_Close" data-name="Icon/Close" transform="translate(344 20)">
          <rect id="矩形" width="16" height="16" opacity="0" />
          <path
            id="路径"
            d="M5.763,5.094,9.864.2a.124.124,0,0,0-.1-.2H8.522A.255.255,0,0,0,8.33.089L4.947,4.122,1.564.089A.25.25,0,0,0,1.372,0H.125a.124.124,0,0,0-.1.2l4.1,4.889L.03,9.983a.124.124,0,0,0,.1.2H1.372a.255.255,0,0,0,.192-.089L4.947,6.066,8.33,10.1a.25.25,0,0,0,.192.089H9.769a.124.124,0,0,0,.1-.2Z"
            transform="translate(3.047 2.906)"
            fill="rgba(0,0,0,0.45)"
          />
        </g>
      </g>
    </svg>
  );
};
export default Notification;
