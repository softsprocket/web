import React, { Component } from 'react';
import './App.css';
import './SoftSprocket/view/Variables.css'

import {
	FixedNavigationHeader, NavigationButton, FixedFooter, CopyRight,
	BottomUpPage
} from './SoftSprocket/view';

function loadHome () {
	console.log ("Hello, Home!");
}

class App extends Component {

	componentDidMount() {
    	document.title = "SoftSprocket - Home Page"
  	}

	render() {
		return (
			<div className="App">
				<FixedNavigationHeader>
					<NavigationButton text="Home" action={ loadHome() } />
				</FixedNavigationHeader>
				<BottomUpPage>
					<p>Hello, Bottoms Up</p>
				</BottomUpPage>
				<FixedFooter>
					<CopyRight owner="SoftSprocket" />
				</FixedFooter>
			</div>
		);
	}
}

export default App;
