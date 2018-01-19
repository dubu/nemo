import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Nemo from "./components/Nemo";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Nemo width={640} height={480} />,
    document.getElementById("root")

);



