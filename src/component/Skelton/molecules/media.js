import SkeltonText from '../atoms/SkeltonText';
import SkeltonDiv from '../atoms/SkeltonDiv';

import './style.css'

function SkeltonMedia(type) {
  return (<div className="container">
    <div className="media-items">
      <div className='media-image'>
      <SkeltonDiv width='50px' height={'50px'} type='circle'/>
      </div>
      <div className='p-10 w-100'>
       <SkeltonText count={2}/>
       </div>
    </div>
    </div>);
}

export default SkeltonMedia;
