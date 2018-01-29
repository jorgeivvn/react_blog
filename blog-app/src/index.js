import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Post author={"Jorge"} title={"Entourage"} body={""} />, document.getElementById('root'));
registerServiceWorker();
