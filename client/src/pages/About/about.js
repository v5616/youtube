import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../footer/footer";
const About = () => {
  return (
    <>
      <div className="Container mt-2">
        <Row className="m-0 p-0">
          <Col lg={12}>
            <Row className="m-0 p-0 ">
              <Col
                lg={12}
                className="m-0 p-0 d-flex justify-content-center pt-md-3 pt-0"
              >
                <h3
                  className="text-white  aboutheadings pt-5"
                  data-aos="zoom-in"
                >
                  ABOUT YT<span className="topline pt-3">SHOP</span>INDIA
                </h3>
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <Col lg={12} className="m-0 p-0 d-flex justify-content-center">
                <p className="text-white aboutparagraph ">
                  Bridging the Gap between You and YouTube Success with
                  YTSHOPINDIA
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Container>
          <div className="mt-md-5 pt-md-5 mt-2">
            <Row>
              <Col lg={12}>
                <Row className="d-flex justify-content-around">
                  <Col lg={5}>
                    <Row>
                      <Col className="text-center">
                        <h4 className="aboutheadings mt-5 pt-3">O<span className="grayline pt-4">ur <span className="orangeline pt-4">Miss</span>io</span>n</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="d-flex text-center aboutparagraph" >
                          Do You Have A Dream of Becoming A Great Youtuber? We
                          Are Ready To Support You in Your Sweet Journey.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-center getsupportLine ">
                        <h4>Get Support</h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={5} className="mt-4 mt-md-0">
                    <Row>
                      <Col>
                        <p className="about-paragraph">
                          YTSHOPINDIA is a one-stop-shop for all your YouTube
                          channel needs. Whether you're looking to buy a YouTube
                          channel, or want to sell your existing one, our
                          platform is the perfect solution for you. We
                          understand the value of your time and effort, and
                          that's why we strive to make the process of buying and
                          selling YouTube channels as smooth and seamless as
                          possible. With a team of experts and a passion for
                          delivering excellence, YTSHOPINDIA is the platform you
                          can trust.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="about-paragraph">
                          Our platform is trusted by over 2000+ YouTube
                          creators. We have a 99.9% customer satisfaction ratio,
                          and we are always striving to improve our services to
                          better serve our community. You can join our Telegram
                          channel to stay up to date on the latest offers and
                          announcements.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="about-paragraph">
                          We are passionate about helping creators reach their
                          goals and we look forward to working with you. Join
                          the YTSHOPINDIA community today and take the first
                          step towards growing your YouTube channel.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default About;
