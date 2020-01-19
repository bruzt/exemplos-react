import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './main/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
