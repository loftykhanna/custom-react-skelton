import React from "react";
import './styles.css';

function SkeltonDiv({width ='50x', height='50px', type='box', borderRadius='0px'}) {
  return (
    <div className={`skeleton-div skeleton-${type}`  } style={{width, height, borderRadius}} />
  );
}

export default React.memo(SkeltonDiv);
