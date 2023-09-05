"use client";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const MainNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="shadow-sm  bg-white" variant="light">
        <div className="container">
          <Navbar className="fw-bold text-info fs-4" href="/">
            Ahammed
          </Navbar>
          <Nav
            className="text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className="text-decoration-none fw-bold text-dark"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default MainNav;
