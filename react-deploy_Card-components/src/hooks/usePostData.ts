import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { useToken } from "./useToken";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updatePostsData } from "../reducers";



export function usePostsData() {
    const dispatch = useDispatch();
    const [postsData, setPostsData] = useState({})
   
    const token = useSelector<RootState, any>(state => state.tokenReducer.contxt)
  
    useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get('https://oauth.reddit.com/best.json?sr_detail=true', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((data) => {
                console.log('workingData')
                dispatch(updatePostsData(data.data.data.children))
                setPostsData(data)
            })
            .catch(err => console.log(err))
    }, [token])
    
   return [postsData]
};

