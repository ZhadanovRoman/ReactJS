import { useState } from 'react';
import styles from './footer-table.module.scss';

interface IProps {
    tableLength: string,
     handleRight: (arg0: boolean) => void, 
     handleLeft:(arg0: boolean) => void,
     row: string | null | number | undefined
}


const FooterTable = (props: IProps) => {
    const [leftC, setLeftC] = useState<boolean>(false);
    const [rightC, setRightC] = useState<boolean>(false);

    props.handleRight(rightC)
    props.handleLeft(leftC)

    const rightClick = () => {
        if(!rightC){
            setLeftC(false)
            setRightC(true);
        }else{setRightC(false)}
           // setTimeout(() => { setRightC(false) }, 150);
    }
    const leftClick = () => {
        if(!leftC){
            setRightC(false)
            setLeftC(true);
        }else{setLeftC(false)}

           // setTimeout(() => { setLeftC(false) }, 150);
        
    }


    //кал-во строк в паганаторе задается из инпута поиска либо при фокусе либо от ввода
    return (
        <div className={styles.tabFooter}>
            <div className={styles.tabFooter__allPages}>
                <div><span>1</span>/<span>{props.row? props.row : '15'}</span></div>of<div>{props.tableLength}</div>
            </div>
            <div className={styles.tabFooter__paginatBlock}>
                <span></span>
                < div className={styles.tabFooter__pagination}>
                    <button className={styles.tabFooter__leftBtn} onClick={leftClick}></button>
                    <span className={styles.tabFooter__betweenBtns}>1/2</span>
                    <button className={styles.tabFooter__rightBtn} onClick={rightClick}></button>
                </div>
            </div>
        </div>
    )
}

export default FooterTable