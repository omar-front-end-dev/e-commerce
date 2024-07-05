import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { Header, Footer } from "@components/common";
const { container, wrapper } = styles;

export const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </Container>
  );
};
