import React from 'react';
import './Page.css'

class BottomUpPage extends React.Component {
	constructor (props) {
		super (props);
		this.children = props.children;
	}

	render () {
		return (
			<div class="bottom-up-page">
				{ this.children }
			</div>
		);
	}

}

export {
	BottomUpPage
};
