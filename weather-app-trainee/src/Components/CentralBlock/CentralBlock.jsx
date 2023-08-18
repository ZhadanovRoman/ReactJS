import ForeCast from './ForeCast/ForeCast';
import Detail from './Detail/Detail';

import './central-block.css';

function CentralBlock(){
    
    return(
<>
<section className="central-block">

<ForeCast />
<Detail/>
</section>
</>
    )
}

export default CentralBlock;