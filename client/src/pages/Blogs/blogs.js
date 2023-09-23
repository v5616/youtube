import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import imagefirst from "../../images/firstcardimg.png";
import imagesecond from "../../images/secondcardimg.jpg";
import imagethird from "../../images/thirdcardimg.png";
import imagefourth from "../../images/fourthcardimg.png";
const Blogs = () => {
  return (
    <>
      <div className="Container mt-2">
        <Row className="m-0 p-0">
          <Col lg={12}>
            <Row className="m-0 p-0 ">
              <Col
                lg={12}
                className="m-0 p-0 d-flex justify-content-center pt-3"
              >
                <h3 className="text-white  headings pt-5" data-aos="zoom-in">
                  B<span className="topline pt-2">LOG</span>S
                </h3>
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <Col lg={12} className="m-0 p-0 d-flex justify-content-center">
                <p className="text-white paragraphfont ">
                  A list of useful and recent blog posts
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="Cards my-md-5  my-4 ">
        <Container className="cardscontainer">
          <Row className="m-0 p-0">
            <Col lg={12}>
              <Row className="mx-md-0 p-0">
                <Col lg={4} className="d-flex justify-content-center">
                  <Card className="cardwidth">
                    <Card.Img
                      variant="top"
                      className="card-img-hover"
                      src={imagefirst}
                    />
                    <Card.Body className="cardbackground py-md-4 pb-2 pt-3">
                      <Card.Title className="blog-card-header">
                        How To Sell A YouTube Channel?{" "}
                      </Card.Title>
                      <Card.Text className="blog-card-paragraph py-md-3 py-1">
                        In the world of YouTube, many creators decide to sell
                        their channels due to various reasons. However, finding
                        a trusted platform to sell your channel..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-center pt-4  pt-md-0 "
                >
                  <Card className="cardwidth">
                    <Card.Img variant="top" src={imagefirst} />
                    <Card.Body className="cardbackground  py-md-4 pb-2 pt-3">
                      <Card.Title className="blog-card-header">
                        How To Buy A YouTube Channel?
                      </Card.Title>
                      <Card.Text className="blog-card-paragraph py-md-3 py-1">
                        YouTube is a massive platform that offers many
                        opportunities for businesses and individuals to reach
                        their target audience and earn money. However,..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-center  pt-4  pt-md-0"
                >
                  <Card className="cardwidth">
                    <Card.Img variant="top" src={imagesecond} />
                    <Card.Body className="cardbackground  py-md-4 pb-2 pt-3">
                      <Card.Title className="blog-card-header">
                        How to move youtube channel to brand account?
                      </Card.Title>
                      <Card.Text className="blog-card-paragraph py-md-3 py-1">
                        Moving a YouTube channel to brand account can be easy,
                        but it also involves some risk. Typically, people use
                        this process to either transfer their..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mx-0 p-0 mt-md-4 mt-0 ">
            <Col lg={12}>
              <Row className="mx-md-0 p-0">
                <Col
                  lg={4}
                  className="d-flex justify-content-center pt-4  pt-md-0"
                >
                  <Card className="cardwidth">
                    <Card.Img variant="top" src={imagethird} />
                    <Card.Body className="cardbackground py-md-4 pb-2 pt-3">
                      <Card.Title className="blog-card-header">
                        Benefits of Buying A YouTube Channel From ChannelKart
                      </Card.Title>
                      <Card.Text className="blog-card-paragraph py-md-3 py-1">
                        When it comes to building a successful YouTube channel,
                        starting from scratch can be a time-consuming and
                        challenging process. But what if there was..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-center  pt-4  pt-md-0"
                >
                  <Card className="cardwidth">
                    <Card.Img variant="top" src={imagefourth} />
                    <Card.Body className="cardbackground  py-md-4 pb-2 pt-3">
                      <Card.Title className="blog-card-header">
                        How To Earn Money From YouTube?
                      </Card.Title>
                      <Card.Text className="blog-card-paragraph py-md-3 py-1">
                        YouTube has become a major source of entertainment and
                        information for people worldwide. With over 2 billion
                        active monthly users, it's no wonder..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
