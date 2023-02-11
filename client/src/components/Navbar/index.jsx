import React from "react";
import {Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {

    return (

        <>
            <Nav>
                <NavMenu><NavLink to="/homeS" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/jobportal" activeStyle>
                        JobPortal
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;