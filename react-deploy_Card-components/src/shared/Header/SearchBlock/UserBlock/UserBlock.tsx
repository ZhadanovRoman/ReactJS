import React, { useEffect, useState } from "react";
import { EColor, DdText } from "../../../Dropdown/DdTextStyle";
import styles from './userBlock.css';
import { IconAnonim } from "../../../icons";

interface IUserBlockProps {
    avatarSrc?: any,
    userName?: string
}


export function UserBlock({ userName, avatarSrc }: IUserBlockProps) {

    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {userName ?
                    <img src={avatarSrc ? avatarSrc.replace(/(\&amp\;)/g, "&") : ''} alt="avatar" className={styles.avatarImage} /> :
                    <IconAnonim />
                }
            </div>
            <div className={styles.userName}>
                <DdText size={20} color={userName ? EColor.black : EColor.gray99}>{userName || 'Аноним'}</DdText>

            </div>

        </a>
    )
}