
import styles from './calendar.module.css';
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useWeekDay } from '../hooks/useWeekDay';
import { useCalendarRendor } from '../hooks/useCalendarRender';
import Arrow from '../arrow/Arrow';

interface ICalendarProps {
    onClose?: () => void;
    dateData: {
        name: string;
        daysOfMonth: number,
        day: number;
        year: number;
        month: number;
    };
}

const Calendar: React.FC<ICalendarProps> = (props) => {
    const weekDaysArr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    const weekDay = useWeekDay(props.dateData.month, props.dateData.year);
    console.log(weekDay, props.dateData.daysOfMonth)
    const [emptyArr, dayOfMonthArr] = useCalendarRendor(weekDay, props.dateData.daysOfMonth)
    const ref = useRef<HTMLDivElement>(null);
    const [isFirstClick, setIsFirstClick] = useState(true);

    useEffect(() => {
        if (isFirstClick) {
            setIsFirstClick(false);
            return;
        }

        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof Node && !ref.current?.contains(e.target)) {
                props.onClose?.();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isFirstClick, props.onClose]);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    const weekDays = weekDaysArr.map((day, index) => (
        <li key={index} className={styles.week_day_item}>
            {day}
        </li>
    ));

    const emptyElem = emptyArr.map((empty, index) => (
        <li key={index} className={styles.calendar_item}>
            {empty}
        </li>
    ))

    const numberElem = dayOfMonthArr.map((num, index) => (
        <li key={index} className={styles.calendar_item}>
            {num}
        </li>
    ))

    return ReactDOM.createPortal(
        (
            <div ref={ref} className={styles.calendar}>
                <div className={styles.calendar_title_block}>
                    <span className={styles.title}>Календарь</span>
                    <div className={styles.month_block}>
                        <div className={styles.month_left_btn}><Arrow /></div>
                        <span className={styles.month}>{props.dateData.name}</span>
                        <div className={styles.month_right_btn}><Arrow /></div>
                    </div>
                </div>
                <ul className={styles.days_list}>
                    {weekDays}
                </ul>
                <ul className={styles.number_days_list}>
                    {emptyElem}
                    {numberElem}
                </ul>
                <button className={styles.button}>Выбрать</button>
            </div>
        ),
        node
    );
};

export default Calendar;