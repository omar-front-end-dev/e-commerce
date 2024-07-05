import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./style.module.css";

const { headerContainer, headerLogo, basketContainer, basketQuantity } = styles;

export const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>
            our <Badge bg="info">E-com</Badge>
          </span>
        </h1>
        <div className={basketContainer}>
          <div className={basketQuantity}>0</div>
          <MdOutlineShoppingCart size={"30px"} />
        </div>
      </div>
      <Navbar expand="lg" className="bg-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#home">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
