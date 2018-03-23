import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import createHashHistory from 'history/createHashHistory';


const customHistory = createHashHistory();

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
      <App history={customHistory} />
  </Router>,
  document.getElementById('root')
);