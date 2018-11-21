
import React from 'react';
import "./FixedFooter.css"

class FixedFooter extends React.Component {
	constructor (props) {
		super (props);
		this.children = props.children;
	}

	render () {
		return (
			<div className="fixed-footer">
				{ this.children }
			</div>
		);
	}

}

class CopyRight extends React.Component {
	constructor (props) {
		super (props);
		this.owner = props.owner;
		this.year = new Date ().getFullYear ();
	}

	render () {
		return (
			<div>&copy; { this.owner } {this.year }</div>
		);
	}
}

export { FixedFooter, CopyRight };
