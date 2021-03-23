import React from "react";

const Model = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="624"
      height="364"
      viewBox="0 0 624 364"
    >
      <defs>
        <filter
          id="bg"
          x="0"
          y="0"
          width="624"
          height="364"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="12" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feFlood flood-opacity="0.031" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Feedback_Modal_Light_Basic"
        data-name="Feedback/Modal/Light/Basic"
        transform="translate(72 60)"
      >
        <g transform="matrix(1, 0, 0, 1, -72, -60)" filter="url(#bg)">
          <rect
            id="bg-2"
            data-name="bg"
            width="480"
            height="220"
            rx="2"
            transform="translate(72 60)"
            fill="#fff"
          />
        </g>
        <text
          id="何时使用_需要用户处理事务_又不希望跳转"
          data-name="何时使用：需要用户处理事务，又不希望跳转"
          transform="translate(24 81)"
          fill="rgba(0,0,0,0.65)"
          font-size="14"
          font-family="PingFangSC-Regular, PingFang SC"
        >
          <tspan x="0" y="15">
            何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程
          </tspan>
          <tspan x="0" y="37">
            时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操
          </tspan>
          <tspan x="0" y="59">
            作。
          </tspan>
        </text>
        <g id="Bottom" transform="translate(0 168)">
          <rect id="矩形" width="480" height="52" fill="none" />
          <rect id="Dividers" width="480" height="1" fill="rgba(0,0,0,0.06)" />
          <g
            id="General_Button_Primary_Light_Default"
            data-name="General/Button/Primary/Light/Default"
            transform="translate(399 10)"
          >
            <rect
              id="矩形-2"
              data-name="矩形"
              width="65"
              height="32"
              rx="2"
              fill="#1890ff"
            />
            <text
              id="主按钮"
              transform="translate(32.5 21)"
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
            id="General_Button_Default_Light_Default"
            data-name="General/Button/Default/Light/Default"
            transform="translate(326 10)"
          >
            <g
              id="矩形-3"
              data-name="矩形"
              fill="#fff"
              stroke="rgba(0,0,0,0.15)"
              stroke-miterlimit="10"
              stroke-width="1"
            >
              <rect width="65" height="32" rx="2" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="64"
                height="31"
                rx="1.5"
                fill="none"
              />
            </g>
            <text
              id="次按钮"
              transform="translate(32.5 21)"
              fill="rgba(0,0,0,0.65)"
              font-size="14"
              font-family="PingFangSC-Regular, PingFang SC"
            >
              <tspan x="-16.331" y="0">
                取 消
              </tspan>
            </text>
          </g>
        </g>
        <g id="Top">
          <rect
            id="矩形-4"
            data-name="矩形"
            width="480"
            height="56"
            fill="none"
          />
          <rect
            id="Dividers-2"
            data-name="Dividers"
            width="480"
            height="1"
            transform="translate(0 55)"
            fill="rgba(0,0,0,0.06)"
          />
          <g
            id="Icon_Close"
            data-name="Icon/Close"
            transform="translate(440 20)"
          >
            <rect
              id="矩形-5"
              data-name="矩形"
              width="16"
              height="16"
              opacity="0"
            />
            <path
              id="路径"
              d="M5.763,5.094,9.864.2a.124.124,0,0,0-.1-.2H8.522A.255.255,0,0,0,8.33.089L4.947,4.122,1.564.089A.25.25,0,0,0,1.372,0H.125a.124.124,0,0,0-.1.2l4.1,4.889L.03,9.983a.124.124,0,0,0,.1.2H1.372a.255.255,0,0,0,.192-.089L4.947,6.066,8.33,10.1a.25.25,0,0,0,.192.089H9.769a.124.124,0,0,0,.1-.2Z"
              transform="translate(3.047 2.906)"
              fill="rgba(0,0,0,0.45)"
            />
          </g>
          <text
            id="Title"
            transform="translate(24 34)"
            fill="rgba(0,0,0,0.85)"
            font-size="16"
            font-family="PingFangSC-Medium, PingFang SC"
            font-weight="500"
          >
            <tspan x="0" y="0">
              标题
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};
export default Model;
