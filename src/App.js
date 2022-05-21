import "./App.css";

import ExampleSkeletonCard from "./example/SkeletonCard";
import ExampleSkeletonMedia from "./example/SkeletonMedia";

function App() {
  return (
    <div className="App">
      <div className="exampleWrapper">
      <ExampleSkeletonMedia />
      <ExampleSkeletonCard />
      </div>
    </div>
  );
}

export default App;
