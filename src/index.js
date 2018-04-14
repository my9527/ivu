import React from 'react';
import ReactDOM from 'react-dom';
import './res/common.less';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './utils/store';
import {Provider} from 'react-redux';


ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
	, document.getElementById('root'));
registerServiceWorker();
