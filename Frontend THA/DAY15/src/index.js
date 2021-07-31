import React from 'react';
import ReactDOM from 'react-dom';


var element = React.createElement('h3', { className: 'greeting' }, 'Hello, world! using react');
ReactDOM.render(element, document.getElementById('root'));