import SkeltonText from '../atoms/SkeltonText';
import SkeltonDiv from '../atoms/SkeltonDiv';

import './style.css'

function SkeltonCard() {
  return (<div className="skelton-data-card">
    <SkeltonDiv  width='100%' height='250px'/>
    <div className='card-headline-container'>
    <SkeltonDiv  width='70%' height='40px'/>
    </div>
    <div className='card-text'>
    <SkeltonText  count={4}/>
    </div>

</div>);
}

export default SkeltonCard;
