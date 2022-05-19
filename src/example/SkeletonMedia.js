import React, { useEffect, useState } from "react";

import Skelton, { SkeltonSuspense } from "../component/Skelton";

import axios from "axios";
import "./style.css";
const Media = (item) => {
  console.log("from media");
  return (
    <li key={item.id} className="item">
      <div>
        <img className="img" src={item.avatar} alt="" />
      </div>
      <div className="info">
        <p className="m-0">
          <strong>
            {item.first_name} {item.last_name}
          </strong>
        </p>
        <p className="m-0">{item.email}</p>
      </div>
    </li>
  );
};

const ExampleSkeletonMedia = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Intentionally delay the function execution
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => {
      axios.get("https://reqres.in/api/users?page=2").then((res) => {
        setTimeout(() => setData(res.data.data), 2000);
      });
    });
  }, []);

  return (
    <div className="media-example-container">
      <h1>Media example</h1>
      <div className="media-content-Wrapper">
        <SkeltonSuspense
          Suspense={<Skelton type="media" />}
          ActualComponent={<Media />}
          multiplier={5}
          data={data}
        />
      </div>
    </div>
  );
};

export default ExampleSkeletonMedia;
