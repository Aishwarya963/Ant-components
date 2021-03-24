import React from "react";

const Avatar = (props) => {
  const { height, width } = props;
  return (
    <svg
      id="DataDisplay_Avatar_Light_Circle-Icon"
      data-name="DataDisplay/Avatar/Light/Circle-Icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <circle id="oval" cx="16" cy="16" r="16" fill="rgba(0,0,0,0.25)" />
      <g id="Icon_User" data-name="Icon/User" transform="translate(4 4)">
        <g id="Icon_User-2" data-name="Icon/User">
          <rect id="rectangle" width="24" height="24" opacity="0" />
          <path
            id="shape"
            d="M17.438,18.656H16.031a.186.186,0,0,1-.188-.182,7.033,7.033,0,0,0-14.062,0,.186.186,0,0,1-.188.182H.188A.187.187,0,0,1,.053,18.6.185.185,0,0,1,0,18.464a8.69,8.69,0,0,1,.691-3.236,8.809,8.809,0,0,1,1.89-2.8,8.7,8.7,0,0,1,2.8-1.889L5.4,10.53l.01,0a5.814,5.814,0,1,1,6.807,0l.014.006.014.006a8.815,8.815,0,0,1,5.381,7.929.189.189,0,0,1-.055.136A.186.186,0,0,1,17.438,18.656ZM8.813,1.781a4.033,4.033,0,1,0,2.85,1.181A4,4,0,0,0,8.813,1.781Z"
            transform="translate(3.187 2.672)"
            fill="rgba(0,0,0,0.65)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Avatar;
