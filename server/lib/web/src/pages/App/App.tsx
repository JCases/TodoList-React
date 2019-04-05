import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import AddEdit from '../../components/AddEdit/AddEdit';
import { Header } from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { Login } from '../../components/Login/Login';

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
            <Route exact path="/login" component={ Login } />
            <Route exact path="/" component={ Main } />
            <Route exact path="/add" component={ AddEdit } />
          </ContentApp>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
