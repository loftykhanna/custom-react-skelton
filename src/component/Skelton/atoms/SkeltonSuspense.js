import React, {useEffect, useState } from "react";

import Skelton from "../molecules";


function SkeletonSuspense({
  Suspense,
  ActualComponent,
  multiplier,
  data = [],
  key
}) {
  const [internalData, setInternalData] = useState(data);
  useEffect(() => {
    if(data.length){
      setInternalData(data)
    }else {
  let tempComponent = [];
  let mx = multiplier || 1
  for (let i = 0; i < mx; i++) {
    tempComponent.push('__1');
  }
  setInternalData(tempComponent);
}
}, [data]);



const renderUI = ()=> {
  console.log('internalUI',internalData, Suspense, ActualComponent )
  return internalData.map((value)=>{
        if(value=='__1') return Suspense
        return React.cloneElement(ActualComponent, {...value})
  });
};

  return (
   renderUI()
  )
}

export default SkeletonSuspense;
