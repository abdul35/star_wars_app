import Link from "next/link";
import React from "react";

const Header = (): JSX.Element => {
	return (
		<>
			<header className="header mb-5">
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg bg-light">
						<div className="container">
							<ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
								<li className="nav-item p-2 h5">
									<Link href={"/"}>Main</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
