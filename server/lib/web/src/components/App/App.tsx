import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '../Header/Header';
import Main from '../Main/Main';
import PopUp from '../PopUp/PopUp';

import { Provider } from 'react-redux';
import { store } from '../../reducers/index';

import { ContentApp } from './Style';

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ContentApp>
            <Header />
            <Route exact path="/login" component={ Main } />
            <Route path="/" component={ Main } />
            <Route exact path="/add" component={ PopUp } />
          </ContentApp>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
