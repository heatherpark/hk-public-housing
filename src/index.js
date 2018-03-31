import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/container/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
