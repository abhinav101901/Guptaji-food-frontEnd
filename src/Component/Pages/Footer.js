import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../styles/Footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className="footer1">
      <Row>
        <Col  className="footer2">
          <h3>Designed and Developed by Abhinav Gupta</h3>
        </Col>
        <Col className="footerb">
          <ul className="footeri">
            <li className="sociali">
              <a
                href="https://github.com/abhinav101901"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhinavgupta-2023821a5/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/g.abhi_gupta787"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col className="footer3">
          <h3>Copyright © {year} AG</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
