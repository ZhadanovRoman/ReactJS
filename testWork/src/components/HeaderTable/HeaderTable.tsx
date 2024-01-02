import { ChangeEvent, useEffect, useState } from 'react';
import styles from './header-table.module.scss';
import { useDispatch } from 'react-redux';
import { apiSelectAction, inptValueAction } from '../../reducers';
import SelectMenu from './SelectMenu/SelectMenu';




interface IHeaderProps {

    name: string,
    type: string,
    url: string,
    onInputChange: (value: string) => void;
}

const HeaderTable = ({ name, type, url, onInputChange }: IHeaderProps) => {

    const dispatch = useDispatch();

    const [inptVal, setInptVal] = useState<any>();
    const [inptFocus, setInptFocus] = useState<boolean>(false)
    const [apiSel, setApiSel] = useState<string>()
    dispatch(apiSelectAction(apiSel))

    function getValue(e: ChangeEvent<HTMLInputElement>) {
        setTimeout(() => { setInptVal(e.target.value.replace(/\D/g, '')) }, 1500);
        console.log(inptVal)
    };

    onInputChange(inptVal);
    useEffect(() => {
        dispatch(inptValueAction(inptVal))
    }, [inptVal])


    const propsArr = [];
    if (name) {
        propsArr.push('#')
        propsArr.push(name);
        propsArr.push(url);
        propsArr.push(type);
    }

    const item = propsArr.map((el, index) =>
        <li className={styles.headerTable__item} key={index} >{el}<span className={styles.headerTable__arrow} />
            <span className={styles.headerTable__arrowBottom}></span><span className={styles.headerTable__arrowTop}></span></li>
    )
    return (
        <div className={styles.headerTable}>
            <input type="text" placeholder="Введите или выберите число отоброжаемых строк" className={styles.headerTable__inpt} onChange={getValue}
                onClick={() => {
                    if (inptFocus) {
                        setInptFocus(false)
                    } else { setInptFocus(true) }
                }
                } />
            <div className={styles.headerTable__apiSelBlock}>
                <label htmlFor="apiSelect">Выберите ссылку:</label>
                <select name="apiSelect" id="apiSelect" className={styles.headerTable__apiSelect} onChange={(e) => {if(e.target.value ){
                    setApiSel(e.target.value)
                } }}>
                    <option value="https://rickandmortyapi.com/api/location">https://rickandmortyapi.com/api/character</option>
                    <option value="https://rickandmortyapi.com/api/character">https://rickandmortyapi.com/api/location</option>
                </select>
            </div>
            <ul className={styles.headerTable__list}>{item}</ul>
            <SelectMenu inputFocus={inptFocus} />
        </div>

    )
}
export default HeaderTable;





