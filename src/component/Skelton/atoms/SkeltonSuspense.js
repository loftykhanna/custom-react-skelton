import React, { useEffect, useState } from "react";

function SkeletonSuspense({
  Suspense,
  ActualComponent,
  multiplier = 5,
  data = [],
}) {
  const [internalData, setInternalData] = useState(data);
  useEffect(() => {
    if (data.length) {
      setInternalData(data);
    } else {
      let tempComponent = [];
      let mx = multiplier || 1;
      for (let i = 0; i < mx; i++) {
        //adding __1 so that its easy to detect its value of temp array created
        tempComponent.push("__1");
      }
      setInternalData(tempComponent);
    }
  }, [data, multiplier]);

  const renderUI = () => {
    return internalData.map((value, i) => {
    // If value of array is not __1 return actual component elese return skeleton
    // Here key is not optimised, can be done better
      if (value === "__1") return Suspense;
      return React.cloneElement(ActualComponent, { ...value, key: i });
    });
  };

  return renderUI();
}

export default React.memo(SkeletonSuspense);
