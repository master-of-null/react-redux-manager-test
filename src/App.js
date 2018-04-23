import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAVpJ_qoB1xTVos2L8YCQJfGBwm8GXFnKE',
			authDomain: 'manager-f3e82.firebaseapp.com',
			databaseURL: 'https://manager-f3e82.firebaseio.com',
			projectId: 'manager-f3e82',
			storageBucket: '',
			messagingSenderId: '491204359571'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
