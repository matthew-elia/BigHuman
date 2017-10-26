import React, { Component } from 'react';
import Header from './base/Header';
import Main from './pages/Main';
import '../styles/global/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header/>
      	<Main />
      </div>
    );
  }
}

export default App;
