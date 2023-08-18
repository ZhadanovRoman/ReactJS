import SidePanel from './SidePanel/SidePanel';
import CentralBlock from './CentralBlock/CentralBlock';

import './main-container.css'


function MainContainer(){
    return(
        <>
        <main className="main-container">
        
        <SidePanel />
      <CentralBlock />
        </main>
        </>
    )
}

export default MainContainer;