import React from "react";
import {Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {

    return (
        <>
            <Nav className = "nav">
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
            <hr width="-300000000000px" 
                    color="white" 
                    size="5" 
                    align="left"
                    border-bottom="5px solid white"
                    ></hr>
        </>
    );
};

export default Navbar;