import SkeltonMedia from "./media";
import SkeltonCard from "./Card";

function Skelton({type}) {

  const SkeltonMap = {
    'media' :  SkeltonMedia,
    'card' : SkeltonCard
  }
  
  const RendereUI = SkeltonMap[type]
  return <RendereUI />;
}

export default Skelton;
