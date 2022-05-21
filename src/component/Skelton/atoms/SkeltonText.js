import React from "react";
import "./styles.css";

import SkeltonP from "./SkeltonP";
function SkeltonText({ count=1 }) {
  const renderText = () => {
    return new Array(count).fill(1).map((_, i) => {
      return i ===count-1 ? <SkeltonP width={'50%'} key={`key-${i}`} />: <SkeltonP key={`key-${i}`}/>
    });
  };
  return <div className="skelton-text-container">{renderText()}</div>;
}

export default React.memo(SkeltonText);
