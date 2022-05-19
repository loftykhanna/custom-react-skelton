import SkeltonText from '../atoms/SkeltonText';
import SkeltonDiv from '../atoms/SkeltonDiv';

import './style.css'

function SkeltonMedia(type) {
  return (<div className="container">
    <div className="skeleton-item">
      <div>
      <SkeltonDiv width='100px' height={'100px'} borderRadius={'10%'}/>
      </div>
      <div className='p-10 w-100'>
       <SkeltonText count={3}/>
       </div>
    </div>
    </div>);
}

export default SkeltonMedia;
