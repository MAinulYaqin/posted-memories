import React from 'react';
import ReactDom from 'react-dom';
// Component
import App from './components/App';


// debugger
ReactDom.render(
    <App initialContest={window.initialData.data} />,
    document.getElementById('root')
);
