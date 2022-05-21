import React from "react";
import "./styles.css";

function SkeltonP({ width='100%', key }) {
  return <div className="skeleton-text"  key={key} style={{width}}/>;
}

export default React.memo(SkeltonP);
