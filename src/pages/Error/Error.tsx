import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { notFound } = styles;

export const Error = () => {
  return (
    <Container className={notFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to={"/"} replace={true}>
        Looks link you've reached to non-existent page.
        <br />
        How about Going back to safety?
      </Link>
    </Container>
  );
};
