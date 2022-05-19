import "./styles.css";

import SkeltonP from "./SkeltonP";
function SkeltonText({ count }) {
  const renderText = () => {
    return new Array(count).fill(1).map((_, i) => {
      return i ===count-1 ? <SkeltonP width={'50%'} />: <SkeltonP />
    });
  };
  return <div className="skelton-text-container">{renderText()}</div>;
}

export default SkeltonText;
