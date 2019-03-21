import React, { Component } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { PopUp } from './components/PopUp';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <PopUp />
      </div>
    );
  }
}

export default App;
