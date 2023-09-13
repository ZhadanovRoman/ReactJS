import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock/UserBlock';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

import { useToken } from '../../../hooks/useToken';
import { updateToken } from '../../../reducers';



interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock() {
  const dispatch = useDispatch()
  const [data, setData] = useState<IUserData>({})
  const [token] = useToken()
  

  useEffect(() => {
    dispatch(updateToken(token))
    if (!token || token === "undefined") return;
    axios
      .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data
        setData({ name: userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log)


  }, [token])


  if (token !== undefined || token !== '') {



  }
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} userName={data.name} />
    </div>
  );
}
