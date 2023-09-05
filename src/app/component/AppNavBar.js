"use client";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AppNavBar = () => {
  const router = useRouter();
  const Logout = async () => {
    const response = await fetch("/api/login");
    const json = await response.json();
    if (json["status"] === true) {
      router.replace("/");
      router.refresh();
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="shadow-sm  bg-white" variant="light">
        <div className="container">
          <Navbar className="fw-bold text-info fs-4" href="/dashboard">
            Dashboard
          </Navbar>
          <Nav
            className="text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="text-decoration-none fw-bold text-dark" href="/">
              Home
            </Link>
          </Nav>
          <div className="d-flex">
            <button onClick={Logout} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
