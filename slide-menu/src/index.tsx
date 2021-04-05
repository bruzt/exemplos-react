import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import GlobalStyles from './styles/GlobalStyles';
import LandingPage from './pages/LandingPage';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<LandingPage />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
