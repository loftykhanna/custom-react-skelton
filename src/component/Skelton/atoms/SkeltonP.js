import "./styles.css";

function SkeltonP({ width='100%', key }) {
  return <div className="skeleton-text"  key={key} style={{width}}/>;
}

export default SkeltonP;
