
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container-footer">
        <Row className="align-items-center container-footer-icons">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#1"><img src={navIcon1} alt="Icon" /></a>
              <a href="#2"><img src={navIcon2} alt="Icon" /></a>
              <a href="#3"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;