import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global/index.css';
import './styles/base/header.css';
import App from './components/App';
import Header from './components/base/Header';

// import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
