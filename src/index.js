import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/header.css';
import './styles/pages/main.css';
import App from './components/App';
import EnglishLanguageIcon from './images/EnglishLanguageIcon.png'
import ItalianLanguageIcon from './images/ItalianLanguageIcon.jpg'
import { addLocaleData, IntlProvider } from 'react-intl';

// import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

/* Import basic support for another locale if needed
   ('en' is included by default) */
let itLocaleData = require('react-intl/locale-data/it');
addLocaleData(itLocaleData);

/* Define your translations */
let languageLocaleConfig = {
  locale: 'en',
  messages: {
    "lang.title": "Plentiful for Families",
    "lang.message": `Plentiful is a free, easy-to-use reservation system for food pantries and the people they serve.  Use Plentiful to find pantries and the food you need, without waiting in line.`,
    "lang.buttonText": "USE PLENTIFUL",
  }
};

ReactDOM.render(<IntlProvider locale={languageLocaleConfig.locale} messages={languageLocaleConfig.messages}><App /></IntlProvider>, document.getElementById('root'));
registerServiceWorker();
