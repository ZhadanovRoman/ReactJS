

import './main.global.css';

import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList/CardsList';


import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import { combineReducer } from './reducers/index';



const store = createStore(combineReducer, composeWithDevTools())

function AppComponent() {

    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <CardsList />


                </Content>
            </Layout>
        </Provider>
    )
}

//export const App = hot(AppComponent)
export const App = hot(() => <AppComponent />);