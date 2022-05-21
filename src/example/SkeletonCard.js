import React, { useEffect, useState, useCallback } from "react";

import Skelton, { SkeltonSuspense } from "../component/Skelton";

import { fakeData } from "./fakeData";
import "./style.css";


const ExampleSkeletonCard = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    // Intentionally delay the function execution
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => {
        setTimeout(() => setData(fakeData), 2000)
    });
  }, []);

  const DataCard = useCallback((value) => {
    return (
      <div className="data-card">
        <figure className="img-container">
          <img src={value.img} alt={value.title} />
        </figure>
        <h2>{value.title}</h2>
        <p>{value.desc}</p>
      </div>
    );
  },[] );

  return (
    <div className="card-example-container">
      <h1>Card example</h1>
      <div className="card-example-content-wrapper">
        <SkeltonSuspense
          Suspense={<Skelton type="card" />}
          ActualComponent={<DataCard />}
          multiplier={5}
          data={data}
        />
      </div>
    </div>
  );
};

export default ExampleSkeletonCard;
