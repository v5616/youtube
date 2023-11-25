import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
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
import verified from "../../images/iconverified.png";
import privacy from "../../images/sr-privacy.png";
import easyProcess from "../../images/sr-easy-process.png";
import free from "../../images/sr-valuation.png";
import overtrack from "../../images/sr-proven-track-record.png";
import stack from "../../images/sr-support.png";
import review from "../../images/reviewphoto.png";
import imagesecond from "../../images/secondcardimg.jpg";
import imagethird from "../../images/thirdcardimg.png";
import imagefourth from "../../images/fourthcardimg.png";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
const sampleimage = "https://channelkart.com/admin/images/TL1677956445.jpg"
const Home = () => {
  const Navigate = useNavigate()
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
  useEffect(() => {
    AOS.init();
  }, []);
  console.log(data,":sddsdsfds")

  return (
    <>
      {loader ? (
        <Skeleton count={100} />
      ) : (
        <>
          
          <div className="bannerimg">
            <div className="bannercolor"></div>
            <Container>
              <div className="heading">
                <h1 className="text-white">
                  The Most Trusted Platform to <br />
                  <span> Buy &amp; Sell </span> Established <br />
                  <b
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                  >
                    Youtube Channel
                  </b>
                </h1>
                <div className="bnr_btn">
                  <Link to="/buy_channel">
                    <Button className="fill_btn">
                      Buy Channel <i class="fas fas fa-arrow-right ps-3"></i>
                    </Button>
                  </Link>
                  <Link to="/sell_YouTubeChannel">
                    <Button className="fill_btn sell-btn">
                      Sell Channel{" "}
                      <i
                        class="fas fas fa-arrow-right ps-3 "
                        style={{ color: "#ff5700" }}
                      ></i>
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>

          <section>
            <Container className="search-form ">
              <div className="row py-4 home_details">
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
                        <p className="text-dark homeparagraph">
                          Happy Customers
                        </p>
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
                        <p className="text-dark homeparagraph">
                          Years Of Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <Container className="mt-2">
            <div
              className="dt-sc-title with-two-border text-center pb-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h3 className=" text-center">Recently Listed Channels</h3>
            </div>
            <div className="chnl_grid row mt-">
              {data?.map((ele, ind) => {
                return (
                  <div className="chl_det col-md-6 col-sm-12 col-lg-4">
                    <div className="box_grid cnl-slide">
                      <small style={{ backgroundColor: "#858501" }}>
                        {ele?.tag}
                      </small>
                      <figure className="hoverimg">
                        <Link to="#">
                          <div className="image-container">
                            <img
                              alt=""
                              src={ele?.image?ele.image:sampleimage}
                              className="img-fluid"
                              width={800}
                              height={533}
                            />
                            <div className="image-overlay">
                              <Link to="/Detailpage">
                                <span className="view-image-text">
                                  View Details
                                </span>
                              </Link>
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
                              {ele?.category?.name}
                            </p>
                          </span>
                        </div>
                        <div className="pts">
                          <img alt="" className="w-25" src={lang} />
                          <span className="ps-2">
                            <h4>Language</h4>
                            <p>{ele?.language?.name}</p>
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
              <Button onClick={()=>Navigate("buy_YouTubechannel")}
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
          <section></section>
          <div className="mt-4 why_ytshopindia">
            <div className="container">
              <div
                className="dt-sc-title with-two-border text-center pb-2 display-none "
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <h2 style={{}}> WHY YTSHOPINDIA</h2>
              </div>
              <div className="row serv_sec why pt-2">
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    <span>
                      <img className="rotate_img" src={verified} />
                    </span>
                    <h4 className="text-dark">Verified Listings </h4>
                    <p>
                      At Channelkart, we take the authenticity and reliability
                      of the properties we list for sale seriously. Our team
                      thoroughly examines and verifies all YouTube channels
                      before they are made available on our marketplace.
                    </p>
                  </div>
                </div>
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    <span>
                      <img className="rotate_img" src={privacy} />
                    </span>
                    <h4 className=" text-dark">Safe &amp; Secure Deals</h4>
                    <p>
                      For us the trust of our customers is utmost priority and
                      we take it very seriously. We use all possible means to
                      make the each and every deal smooth and fully secured for
                      both the buyer and seller.
                    </p>
                  </div>
                </div>
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    {" "}
                    <span>
                      {" "}
                      <img className="rotate_img" src={easyProcess} />
                    </span>
                    <h4 className=" text-dark">Easy Process </h4>
                    <p>
                      At our company, we make the process of buying and selling
                      as seamless as possible. Our user-friendly platform and
                      dedicated support team are always on hand to assist you
                      every step of the way.
                    </p>
                  </div>
                </div>
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    {" "}
                    <span>
                      <img className="rotate_img" src={free} />
                    </span>
                    <h4 className="text-dark">Free Valuation </h4>
                    <p>
                      Maximize the value of your channel with the help of our
                      expert team. With years of experience and expertise, our
                      team is dedicated to providing you with the best possible
                      valuation of your channel. We consider all important
                      factors while evaluating your channel.
                    </p>
                  </div>
                </div>
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    {" "}
                    <span>
                      <img className="rotate_img" src={overtrack} />
                    </span>
                    <h4 className="text-dark">Proven Track Record </h4>
                    <p>
                      Experience the power of a proven platform. With over 2000
                      content creators having already made successful deals on
                      our marketplace, you can trust that our platform has a
                      solid track record of facilitating safe and secure
                      transactions.
                    </p>
                  </div>
                </div>
                <div
                  className="chl_det col-md-6 col-sm-12 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <div className="srv text-center">
                    {" "}
                    <span>
                      <img className="rotate_img" src={stack} />
                    </span>
                    <h4 className="text-dark">Help Desk </h4>
                    <p>
                      Our expert customer support team is dedicated to helping
                      you navigate the buying and selling process. Available to
                      assist you with any queries, our team is committed to
                      providing you with the best possible service by making
                      your journey more smooth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Container
              className="my-4"
              style={{
                backgroundColor: "#80808014",
                boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 5%)",
              }}
            >
              <Row>
                <div
                  className="dt-sc-title with-two-border text-center pb-2 mt-2"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <h2 style={{}}> Blogs</h2>
                </div>
                <Row>
                  <Col>
                    <p className="text-center" style={{ fontSize: "23px" }}>
                      The latest trends in the digital market
                    </p>
                  </Col>
                </Row>
                <div className="row">
                  <div className="col-12 d-md-flex d-lg-flex">
                    <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="latest_blog_img text-center">
                        <img
                          style={{ width: "95%", borderRadius: "8px" }}
                          className=" h-100"
                          src={imagesecond}
                        />
                      </div>
                      <div className="latest_blog_pharagrah">
                        <h4> How to move youtube channel to brand account?</h4>
                        <p>
                          {" "}
                          Moving a YouTube channel to brand account can be easy,
                          but it also involves some risk. Typically, people use
                          this process to either transfer their..
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="latest_blog_img text-center">
                        <img
                          style={{ width: "95%", borderRadius: "8px" }}
                          className=" h-100"
                          src={imagethird}
                        />
                      </div>
                      <div className="latest_blog_pharagrah">
                        <h4>
                          Benefits of Buying A YouTube Channel From ChannelKart
                        </h4>
                        <p>
                          {" "}
                          When it comes to building a successful YouTube
                          channel, starting from scratch can be a time-consuming
                          and challenging process. But what if there was..
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="latest_blog_img text-center">
                        <img
                          style={{ width: "95%", borderRadius: "8px" }}
                          className=" h-100"
                          src={imagefourth}
                        />
                      </div>
                      <div className="latest_blog_pharagrah">
                        <h4> How To Earn Money From YouTube?</h4>
                        <p>
                          {" "}
                          YouTube has become a major source of entertainment and
                          information for people worldwide. With over 2 billion
                          active monthly users, it's no wonder..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>

          <Container>
            <div
              className="dt-sc-title with-two-border text-center pb-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h2 style={{}}> Customer's Reviews</h2>
            </div>
            <Carousel swipeable={true}>
              <div className=" margin-auto d-flex justify-content-center">
                <div className="w-50">
                  <p className="section-margin-bottom">
                    <i className="fa fa-quote-left" />
                    Lorem ipsum dolor dolore magna aliqua.Ut enim ad minim
                    veniam, quis nostrud exercitation sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor pelican incididunt ut
                    labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <ul className="d-flex justify-content-center ">
                    <li className="display-table-cell pad-right w-25">
                      <img className="w-100" src={review} />
                    </li>
                    <li className="display-table-cell align-middle">
                      <h5 className="section-grp-margin-bottom">Maria Rose</h5>
                      <p className="lt-spacing">Golfer</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" margin-auto d-flex justify-content-center">
                <div className="w-50">
                  <p className="section-margin-bottom">
                    <i className="fa fa-quote-left" />
                    Lorem ipsum dolor dolore magna aliqua.Ut enim ad minim
                    veniam, quis nostrud exercitation sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor pelican incididunt ut
                    labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <ul className="d-flex justify-content-center ">
                    <li className="display-table-cell pad-right w-25">
                      <img className="w-100" src={review} />
                    </li>
                    <li className="display-table-cell align-middle">
                      <h5 className="section-grp-margin-bottom">Maria Rose</h5>
                      <p className="lt-spacing">Golfer</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Carousel>
          </Container>
        </>
      )}
      {/* <Footer/> */}
    </>
  );
};

export default Home;
