import React from "react";
import styles from './cardTextContent.css';

export function CardTextContent({ author, title, avatar, createItemDate }: any) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src={avatar ? avatar : 'https://img.icons8.com/?size=512&id=GwYVu5UZRjBe&format=png'}
                        alt='avatar'
                    />
                    <a href="#user-url" className={styles.username}>{author ? author : 'Дмитрий Гришин'}</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>{createItemDate? '': 'опубликовано'}</span>
                    {createItemDate}</span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    {title ? title : 'Противоположная точка зрения на данную проблему'}
                </a>
            </h2>

        </div>
    )
}