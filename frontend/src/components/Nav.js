import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<div>
			<header>
				<nav className="header-navbar">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<div className="nav-title">
									<Link
										to="/"
										style={{ textDecoration: 'none', color: '#fff' }}
									>
										Bloglada
									</Link>
								</div>
							</div>

							<div className="col-8 text-right">
								<div className="logout">
									<Link
										to="/logout"
										style={{ textDecoration: 'none', color: '#fff' }}
									>
										Logout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
