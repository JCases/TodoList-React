import React, { Component } from 'react';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { PopUp } from '../PopUp/PopUp';

import { ContentApp } from './Style';

class App extends Component {
  render() {
    return (
      <ContentApp>
        <Header />
        <Main />
        <PopUp />
      </ContentApp>
    );
  }
}

export default App;
