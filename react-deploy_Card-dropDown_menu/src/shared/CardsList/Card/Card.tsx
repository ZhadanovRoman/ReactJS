import React from "react";
import styles from './card.css';
import { CardImg } from "./cardImg";
import { CardTextContent } from "./cardTextCont";
import { CardNavy } from "./cardNavy";
import { CardMenu } from "./cardMenu";
import { Dropdown } from "../../Dropdown";
import { MyList } from "../../GenericList";
import { generateId } from '../../../utils/react/generateRandomIndex';
import {CommentItem} from "../../Dropdown/CommentsItems"
import { ShareItem } from "../../Dropdown/ShareItem";
import { HideItem } from "../../Dropdown/HideItem/HideItem";
import { SaveItem } from "../../Dropdown/SaveItem";
import { ComplainItem } from "../../Dropdown/СomplainItem/ComplainItem";
import { CloseItem } from "../../Dropdown/CloseItem";

const LIST = [
  {value:<CommentItem/>},
  {value:<ShareItem/>},
  {value:<HideItem/>},
  {value:<SaveItem/>},
  {value:<ComplainItem/>},
  {value:<CloseItem/>}
].map(generateId)

export function Card(){
    return(
    <li className={styles.card}>
      <CardTextContent/>
      <CardImg/>
      <CardNavy/>
      <Dropdown         
              onClose={()=> console.log('closed')} 
              onOpen={()=>console.log('open')} 
              button={<CardMenu/>}
             >
              <MyList list={LIST.map((item)=>({...item,onClick:()=> {console.log('UUUUEEEE')
                  
              },}))}></MyList>

              </Dropdown>
              
    </li>
    );
}