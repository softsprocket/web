import React from 'react';
import "./NavigationHeader.css"

class NavigationButton extends React.Component {
	constructor (props) {
		super (props);
		this.text = props.text;
		this.action = props.action;
	}

	render () {
		return ( 
			<div onClick={ this.action } className="navigation-button">{ this.text }</div>
		);
	}
}


class FixedNavigationHeader extends React.Component {
	constructor (props) {
		super (props);
		this.children = props.children;
	}

	render () {
		return (
			<div className="fixed-navigation-header">
				{ this.children }
			</div>
		);
	}
}

export {
	NavigationButton,
	FixedNavigationHeader
}

