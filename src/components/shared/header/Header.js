import React, { Component } from 'react';
import './style.css';

class Header extends Component {
	render() {
		return (
			<div className='header-wrapper'>
				<div className='website-logo'>
					<img className='logo-img' src='./../../../src/images/rashh.jpg'></img>
					<span className='website-name'>Blood Bank</span>
				</div>
				<ul className="navbar-ul">
					<li className='navbar-li'>Home</li>
					<li className='navbar-li'>About</li>
					<li className='navbar-li'>Campaigns</li>
					<li className='navbar-li'>Contact</li>
					<li className='navbar-li'>Login</li>
				</ul>
			</div>
		)
	}
}

export default Header;
