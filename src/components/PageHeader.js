import React from "react";

function PageHeader(props) {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1232 174"
    >
      <rect id="rectangle" width="1232" height="174" fill="rgba(0,0,0,0.04)" />
    </svg>
  );
}
export default PageHeader;
