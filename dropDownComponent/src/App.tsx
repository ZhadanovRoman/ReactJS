import React from 'react';
import  './main.global.css';

import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList/CardsList';
import { Dropdown } from './shared/Dropdown/Dropdown';





 function AppComponent(){
    


    return (
        <Layout>
            <Header/>
              <Content>
                  <CardsList/>
              <div style={{padding:20}}>
              <br/>
              <Dropdown 
              onClose={()=> console.log('closed')} 
              onOpen={()=>console.log('open')}
              button={<button>Test</button>}>
              <CardsList/>
              </Dropdown>
              </div>
              </Content>
        </Layout>
    )
 }

export const App = hot(() => <AppComponent/>);
