import React, { Component } from 'react';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { PopUp } from '../PopUp/PopUp';

import { store } from '../../reducers/index';
import { Provider } from 'react-redux';

import { ContentApp } from './Style';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContentApp>
          <Header />
          <Main />
          <PopUp />
        </ContentApp>
      </Provider>
    );
  }
}

export default App;
