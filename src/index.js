import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import searchTMBD from './TMBD/searchTMBD.js';
import TMBD_API_KEY from './TMBD/APIkey.js';

ReactDOM.render(<App searchTMBD={searchTMBD} TMBD_API_KEY={TMBD_API_KEY}/>, document.getElementById('app'));
