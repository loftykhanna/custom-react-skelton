import './styles.css';

function SkeltonDiv({width ='50x', height='50px', type='box', borderRadius}) {
  return (
    <div className={`skeleton-div skeleton-${type}`  } style={{width, height, borderRadius}} />
  );
}

export default SkeltonDiv;
