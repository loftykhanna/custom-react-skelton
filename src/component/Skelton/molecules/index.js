import SkeltonMedia from "./media";
import SkeltonCard from "./Card";

function Skelton({type='card'}) {

  const SkeltonMap = {
    'media' :  SkeltonMedia,
    'card' : SkeltonCard
  }
  
  const RendereUI = SkeltonMap[type]?SkeltonMap[type] : SkeltonMap['card']
  return <RendereUI />;
}

export default Skelton;
