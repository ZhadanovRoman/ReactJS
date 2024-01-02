import { useRef, useState } from 'react';
import styles from './footer-table.module.scss';



interface IProps {
    pageCount: number,
    numberPages: number | undefined,
    tableLength: string | number,
    handleRight: (arg0: boolean) => void,
    handleLeft: (arg0: boolean) => void,
    row: string | null | number | undefined,
    firstData: Array<any>
}


const FooterTable = (props: IProps) => {
    const [leftC, setLeftC] = useState<boolean>(false);
    const [rightC, setRightC] = useState<boolean>(false);

    props.handleRight(rightC)
    props.handleLeft(leftC)
    const clickCounter = useRef<number>(0)
    const rightClick = () => {
        if (!rightC) {

            setRightC(true);
            if (clickCounter.current < (Number(props.firstData.length) / Number(props.tableLength) - 1)) {
                clickCounter.current++
            }
            setTimeout(() => { setRightC(false) }, 150);
        }
    }

    const leftClick = () => {
        if (!leftC) {
            setLeftC(true);
            if(clickCounter.current>0){
                clickCounter.current--
            }
            
            setTimeout(() => { setLeftC(false) }, 150);
        }
    }
    let rowCount = 1
    if (clickCounter.current >= 1) {
        rowCount = clickCounter.current * Number(props.tableLength)
    }

    return (
        <div className={styles.tabFooter}>
            <div className={styles.tabFooter__allPages}>
                <div><span>{rowCount}</span>-<span>{Number(props.tableLength) * (clickCounter.current + 1)}</span></div>of<div>{props.firstData.length}</div>
            </div>
            <div className={styles.tabFooter__paginatBlock}>
                <span></span>
                < div className={styles.tabFooter__pagination}>
                    <button className={styles.tabFooter__leftBtn} onClick={leftClick}></button>
                    <span className={styles.tabFooter__betweenBtns}>{props.pageCount}/{props.numberPages}</span>
                    <button className={styles.tabFooter__rightBtn} onClick={rightClick}></button>
                </div>
            </div>
        </div>
    )
}

export default FooterTable