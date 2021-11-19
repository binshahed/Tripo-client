import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo-light.png";
import useAuth from "../context/useAuth";

const TopNav = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>

            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div>
            <span className="text-warning px-4">{user?.displayName}</span>
            {user.email ? (
              <Button variant="warning" onClick={handleSignOut}>
                logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="warning">Login</Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
