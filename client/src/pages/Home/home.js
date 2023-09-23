import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import flag from "../../images/flag_new.png";
import handshake from "../../images/handshake.png";
import calender from "../../images/calender.png";
import categories from "../../images/categories.png";
import userprofie from "../../images/users-icon.png";
import lang from "../../images/lang.png";
import reviewimage from "../../images/firstcardimg.png";
import monetization from "../../images/monetization.png";
import verified from "../../images/icons8-verified-96.png";
import privacy from "../../images/sr-privacy.png";
import easyProcess from "../../images/sr-easy-process.png";
import free from "../../images/sr-valuation.png";
import overtrack from "../../images/sr-proven-track-record.png";
import stack from "../../images/sr-support.png";
import imagefirst from "../../images/youtube-removebg-preview.png";
import imagesecond from "../../images/secondcardimg.jpg";
import imagethird from "../../images/thirdcardimg.png";
import imagefourth from "../../images/fourthcardimg.png";
const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getProducts = async () => {
    setLoader(true);
    try {
      let res = await axios.get(API_URL + "products");
      setData(res.data.response);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    {loader ? <Skeleton count={100} />:
    <>
      <section id="home_bnr">
        <div className="container">
          <div className="row bnr_cnt">
            <div className="col-md-7">
              <h1>
                The Most Trusted Platform to <br />{" "}
                <span> Buy &amp; Sell </span> Established <br />{" "}
                <b>Youtube Channel</b>{" "}
              </h1>
              <div className="bnr_btn">
                <Link to="/buy_channel">
                  <Button className="fill_btn">Buy Channel</Button>
                </Link>
                <Link to="/sell_YouTubeChannel">
                  <Button className="fill_btn sell-btn">Sell Channel</Button>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              {" "}
              <img alt="" className="w-100" src={imagefirst} />{" "}
            </div>
          </div>
        </div>
      </section>
      <div>
        <Container>
          <div className="row py-5">
            <div className="col-md-4 col-sm-6 col-6">
              <div class="counter green">
                <div class="counter-content d-flex align-items-center justify-content-center">
                  <div class="counter-icon">
                    <img alt="" className="w-75" src={flag} />
                  </div>
                  <div class="counter_right ps-3 ">
                    <span class="counter-value">69 +</span>
                    <p className="text-dark homeparagraph">
                      Available Channels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6">
              <div class="counter">
                <div class="counter-content d-flex align-items-center justify-content-center">
                  <div class="counter-icon">
                    <img alt="" className="w-75" src={handshake} />
                  </div>
                  <div class="counter_right ps-3">
                    <span class="counter-value">2000 +</span>
                    <p className="text-dark homeparagraph">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
              <div class="counter blue">
                <div class="counter-content d-flex align-items-center justify-content-center">
                  <div class="counter-icon">
                    <img alt="" className="w-75" src={calender} />
                  </div>
                  <div class="counter_right ps-3">
                    <span class="counter-value">5 +</span>
                    <p className="text-dark homeparagraph">Years Of Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-5">
        <div>
          <h3 className=" text-center">Recently Listed Channels</h3>
        </div>
        <div className="chnl_grid row mt-">
          {data?.map((ele, ind) => {
            return (
              <div className="chl_det col-md-6 col-sm-12 col-lg-4">
                <div className="box_grid cnl-slide">
                  <small style={{ backgroundColor: "#858501" }}>
                    {ele.tag}
                  </small>
                  <figure className="hoverimg">
                    <Link to="#">
                      <div className="image-container">
                        <img alt=""
                          src="https://channelkart.com/admin/images/TL1677956445.jpg"
                          className="img-fluid"
                          width={800}
                          height={533}
                        />
                        <div className="image-overlay">
                          <span className="view-image-text">View Details</span>
                        </div>
                      </div>
                      {/*--- <div class="read_more"><span>Read more</span></div>*/}
                    </Link>
                  </figure>
                  <div className="wrapper">
                    <h6>{ele?.name}</h6>
                  </div>
                  <hr
                    style={{
                      margin: 0,
                      borderColor: "#a4a4a4",
                      overflow: "hidden",
                    }}
                  />
                  <div className="main_points">
                    <div className="pts">
                      <img alt="" className="w-25" src={userprofie} />
                      <span className="ps-2">
                        <h4>Subscribers</h4>
                        <p>{ele?.subscriber}+</p>
                      </span>
                    </div>
                    <div className="pts">
                      <img alt="" className="w-25" src={categories} />
                      <span className="ps-2">
                        <h4>Category</h4>
                        <p style={{ textTransform: "capitalize" }}>
                          {ele?.category}
                        </p>
                      </span>
                    </div>
                    <div className="pts">
                      <img alt="" className="w-25" src={lang} />
                      <span className="ps-2">
                        <h4>Language</h4>
                        <p>{ele?.language}</p>
                      </span>
                    </div>
                    <div className="pts">
                      <img alt="" className="w-25" src={monetization} />
                      <span className="ps-2">
                        <h4>Monetized</h4>
                        <p>{ele?.monetized === true ? "Yes" : "No"}</p>
                      </span>
                    </div>
                  </div>
                  <div className="revenue">
                    <p>Life Time Revenue: {ele?.revenue}</p>
                  </div>
                  <div className="act_btn"> </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Button
            style={{
              borderRadius: "50px",
              backgroundColor: "#1e3f55",
              border: "2px solid",
              fontWeight: "500",
            }}
          >
            VIEW ALL CHANNEL
          </Button>
        </div>
      </Container>

      <div className="mt-4 " style={{ backgroundColor: "#2e0245a3" }}>
        <Container className="py-3">
          <div className="pb-2">
            <h5
              className="text-center"
              style={{ fontSize: "30px", fontWeight: "650", color: "white" }}
            >
              Why YTSHOPINDIA?
            </h5>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={verified}
                      />

                      <h4 className="verifiedheading">Verified Listings</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      At YtShopIndia, we take the authenticity and reliability
                      of the properties we list for sale seriously. Our team
                      thoroughly examines and verifies all YouTube channels
                      before they are made available on our marketplace.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={privacy}
                      />

                      <h4 className="verifiedheading">Safe & Secure Deals</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      For us the trust of our customers is utmost priority and
                      we take it very seriously. We use all possible means to
                      make the each and every deal smooth and fully secured for
                      both the buyer and seller.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={easyProcess}
                      />

                      <h4 className="verifiedheading">Easy Process</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      At our company, we make the process of buying and selling
                      as seamless as possible. Our user-friendly platform and
                      dedicated support team are always on hand to assist you
                      every step of the way.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={free}
                      />

                      <h4 className="verifiedheading">Free Valuation</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      Maximize the value of your channel with the help of our
                      expert team. With years of experience and expertise, our
                      team is dedicated to providing you with the best possible
                      valuation of your channel. We consider all important
                      factors while evaluating your channel.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={overtrack}
                      />

                      <h4 className="verifiedheading">Proven Track Record</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      Experience the power of a proven platform. With over 2000
                      content creators having already made successful deals on
                      our marketplace, you can trust that our platform has a
                      solid track record of facilitating safe and secure
                      transactions.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="whydiv my-2">
            <Row>
              <Col lg={12}>
                <Row>
                  <Col className="verifiedlist" lg={3}>
                    <span>
                      <img alt=""
                        style={{ width: "35px", height: "36px" }}
                        src={stack}
                      />

                      <h4 className="verifiedheading">Help Desk</h4>
                    </span>
                  </Col>
                  <Col lg={9}>
                    <p className="fw-20">
                      Our expert customer support team is dedicated to helping
                      you navigate the buying and selling process. Available to
                      assist you with any queries, our team is committed to
                      providing you with the best possible service by making
                      your journey more smooth.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="my-4">
        <Row>
          <Col>
            <h3 className="text-center">Blogs</h3>
          </Col>
          <Row>
            <Col>
              <p className="text-center" style={{ fontSize: "23px" }}>
                The latest trends in the digital market
              </p>
            </Col>
          </Row>
          <Container className="cardscontainer">
            <Row className="m-0 p-0">
              <Col lg={12}>
                <Row className="mx-md-0 p-0">
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
                          When it comes to building a successful YouTube
                          channel, starting from scratch can be a time-consuming
                          and challenging process. But what if there was..
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
        </Row>
      </Container>
      <div className="mt-5" style={{ backgroundColor: "#2e0245a3" }}>
        {/* Main Container for Clients Review */}
        <div className="container">
          <h2 className="pt-3" style={{ fontSize: "30px", fontWeight: "700" }}>
            {" "}
            Customer's Reviews{" "}
          </h2>

          <div className="reviewSection">
            {/* Clients Review-1 Section Starts from Here  */}
            <div className="reviewItem">
              <div className="top">
                <div className="clientImage">
                  <img alt=""
                    style={{ borderRadius: "50px" }}
                    src={reviewimage}
                  />
                  <span className="reviewheader">Raju Sheoran</span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid  fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                </ul>
              </div>
              <article>
                <p className="review">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit beatae ipsa voluptatibus perferendis quos eaque nemo
                  error tempora harum quas, laudantium tenetur, neque, facere
                  exercitationem!
                </p>
                <p style={{ color: "blue" }}>Jan 01, 2023</p>
              </article>
            </div>
            {/* Clients Review-2 Section Starts from Here  */}
            <div className="reviewItem">
              <div className="top">
                <div className="clientImage">
                  <img alt=""
                    style={{ borderRadius: "50px" }}
                    src={reviewimage}
                  />
                  <span className="reviewheader">Raju Sheoran</span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                </ul>
              </div>
              <article>
                <p className="review">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit beatae ipsa voluptatibus perferendis quos eaque nemo
                  error tempora harum quas, laudantium tenetur, neque, facere
                  exercitationem!
                </p>
                <p style={{ color: "blue" }}>Jan 01, 2023</p>
              </article>
            </div>
            {/* Clients Review-3 Section Starts from Here  */}
            <div className="reviewItem">
              <div className="top">
                <div className="clientImage">
                  <img alt=""
                    style={{ borderRadius: "50px" }}
                    src={reviewimage}
                  />
                  <span className="reviewheader">Raju Sheoran</span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                  <li>
                    <i className="fa-regular fa fa-star" />
                  </li>
                </ul>
              </div>
              <article>
                <p className="review">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit beatae ipsa voluptatibus perferendis quos eaque nemo
                  error tempora harum quas, laudantium tenetur, neque, facere
                  exercitationem!
                </p>
                <p style={{ color: "blue" }}>Jan 01, 2023</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      </>
}
    </>
  );
};

export default Home;
