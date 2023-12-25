import React, { useState, useEffect } from "react";
import styles from './select-menu.module.scss';
import { useDispatch } from "react-redux";

import { selectValueAction } from "../../../reducers";

const SelectMenu = (props: { inputFocus: boolean }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [inptFocus, setInptFocus] = useState<boolean>();

    useEffect(()=>{
        setInptFocus(props.inputFocus)
    },[props.inputFocus])

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedOption) {
            dispatch(selectValueAction(selectedOption));
        }
    }, [selectedOption, dispatch]);

    const selectOptions = ['5', '10', '15', '20', '30', '40', '50'];
    const item: JSX.Element[] = selectOptions.map((el: string, index: number) => (
        <li key={index} className={styles.select__item} onClick={(e: React.MouseEvent<HTMLLIElement>) => {
            setSelectedOption(e.currentTarget.textContent as string);
            setInptFocus(false);
        }}>{el}</li>
    ));

    return (
        <ul className={inptFocus ? styles.select : styles.selectNone} >
            {item}
        </ul>
    );
}

export default SelectMenu;