import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Chat bot</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
