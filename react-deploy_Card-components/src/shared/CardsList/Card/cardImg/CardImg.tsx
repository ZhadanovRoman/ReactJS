import React from "react";
import styles from './cardImg.css';

export function CardImg({ thumbnail }: any) {
        return (
                <div className={styles.preview}>
                        <img
                                className={styles.previewImg}
                                src={thumbnail ? thumbnail.replace(/(\&amp\;)/g,"&") : "https://picsum.photos/500/300"}
                        />
                </div>
        )

}