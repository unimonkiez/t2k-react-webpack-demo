import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(React.createElement(App), div);
