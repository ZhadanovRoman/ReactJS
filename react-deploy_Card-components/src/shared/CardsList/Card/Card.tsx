import React, { useRef, useState } from "react";
import styles from './card.css';
import { CardImg } from "./cardImg";
import { CardTextContent } from "./cardTextCont";
import { CardNavy } from "./cardNavy";
import { CardMenu } from "./cardMenu";
import { Dropdown } from "../../Dropdown";
import { MyList } from "../../GenericList";
import { generateId } from '../../../utils/react/generateRandomIndex';
import { CommentItem } from "../../Dropdown/CommentsItems"
import { ShareItem } from "../../Dropdown/ShareItem";
import { HideItem } from "../../Dropdown/HideItem/HideItem";
import { SaveItem } from "../../Dropdown/SaveItem";
import { ComplainItem } from "../../Dropdown/СomplainItem/ComplainItem";
import { CloseItem } from "../../Dropdown/CloseItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

const LIST = [
  { value: <CommentItem /> },
  { value: <ShareItem /> },
  { value: <HideItem /> },
  { value: <SaveItem /> },
  { value: <ComplainItem /> },
  { value: <CloseItem /> }
].map(generateId)



export function Card() {
  const bestPostsData = useSelector<RootState, any>(state => state.bestPostsReducer.contxt)
  console.log(bestPostsData,'postsArr')


  function createItem(){
  if (bestPostsData && bestPostsData !== undefined) {
    
  const  Item = bestPostsData.map((el: any) => 
  <li className={styles.card} key={Math.random()}>
  <CardTextContent author={el.data.author} title={el.data.title} avatar={el.data.sr_detail.icon_img} createItemDate={el.data.created_utc}/>
  <CardImg thumbnail={el.data.preview.images[0].source.url
}/>
  <CardNavy />
  <Dropdown
    onClose={() => console.log('closed')}
    onOpen={() => console.log('open')}
    button={<CardMenu />}
  >
    <MyList list={LIST.map((item) => ({
      ...item, onClick: () => {
        console.log('UUUUEEEE')

      },
    })
    )}></MyList>

  </Dropdown>

</li>
      
   ) 
    console.log(Item)
    return Item
  }
   
  }
  return (
    <>{bestPostsData ? createItem() :
      <li className={styles.card}>
        <CardTextContent />
        <CardImg />
        <CardNavy />
        <Dropdown
          onClose={() => console.log('closed')}
          onOpen={() => console.log('open')}
          button={<CardMenu />}
        >
          <MyList list={LIST.map((item) => ({
            ...item, onClick: () => {
              console.log('UUUUEEEE')

            },
          })
          )}></MyList>

        </Dropdown>

      </li>}</>
   

  );
}