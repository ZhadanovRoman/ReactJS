import { useEffect, useState } from 'react';
import Arrow from '../arrow/Arrow';
import styles from './header.module.css'
import Calendar from '../calendar/Calendar';

const Header = () => {


    const months = [{ name: 'января', days: 31 }, { name: 'февраля', days: 29 }, { name: 'марта', days: 31 }, { name: 'апреля', days: 30 }, { name: 'мая', days: 31 }, { name: 'июня', days: 30 }, { name: 'июля', days: 31 }, { name: 'августа', days: 31 }, { name: 'сентября', days: 30 }, { name: 'октября', days: 31 }, { name: 'ноября', days: 30 }, { name: 'декабря', days: 31 }];
    const dateNow = new Date().getDate();
    const monthNow = new Date().getMonth();
    const yearNow = new Date().getFullYear();

    const [counterDay, setCounterDay] = useState(dateNow);
    const [counterMonth, setCounterMonth] = useState(monthNow);
    const [counterYear, setCounterYear] = useState(yearNow);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const counterLeftBtn = () => {
     
        if (counterDay > 1) {
            setCounterDay(counterDay - 1)
        } else {
            setCounterMonth(counterMonth - 1)

            if (counterMonth === 0) {
                setCounterMonth(11)
                setCounterYear(counterYear - 1);
                setCounterDay(months[counterMonth].days)
            } else {
                setCounterDay(months[counterMonth - 1].days)
            }
        }


    }
    const counterRightBtn = () => {
     
        if (counterDay >= months[counterMonth].days) {
            if (counterMonth < 11) {
                setCounterMonth(counterMonth + 1);
                setCounterDay(1)
            } else {
                setCounterYear(counterYear + 1);
                setCounterMonth(0);
                setCounterDay(1);
                
            }

        } else {
            setCounterDay(counterDay + 1)
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left_btn} onClick={counterLeftBtn}><Arrow /></div>
                <div className={styles.central_block} onClick={() => { setIsModalOpen(true) }}>
                    <img src="./images/calendar.jpg" alt="calendar" className={styles.central_block_img} />
                    <span className={styles.central_block_text}>{counterDay + ' ' + months[counterMonth].name}</span>
                </div>
                <div className={styles.right_btn} onClick={counterRightBtn}><Arrow /></div>
                {isModalOpen && (<Calendar
                    onClose={() => { setIsModalOpen(false) }}
                    dateData={{ name: months[counterMonth].name, daysOfMonth: months[counterMonth].days,  day: counterDay, year: counterYear, month: counterMonth  }}
                />)}
            </div>
        </div>
    )
}


export default Header;