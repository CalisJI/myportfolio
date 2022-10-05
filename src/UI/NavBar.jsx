import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/iot-removebg-preview.png";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import { CgGitFork } from "react-icons/cg"; 
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        expanded={expand}
        fixed="top"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="img-sticky logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          </Navbar.Toggle>
          <Nav className="sticky">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
