import React, { useEffect, useState } from "react";

import Skelton, { SkeltonSuspense } from "../component/Skelton";

import { fakeData } from "./fakeData";
import "./style.css";


const ExampleSkeletonCard = (props) => {


  const [data, setData] = useState([]);



  useEffect(() => {
    // Intentionally delay the function execution
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => {
     
        setTimeout(() => setData(fakeData), 2000);
      
    });
  }, []);

  const DataCard = (props) => {
    return (
      <div className="data-card">
        <figure className="img-container">
          <img src={props.img} alt={props.title} />
        </figure>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    );
  };

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
