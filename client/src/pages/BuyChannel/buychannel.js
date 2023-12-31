import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import userprofie from "../../images/users-icon.png";
import lang from "../../images/lang.png";
import categories from "../../images/categories.png";
import monetization from "../../images/monetization.png";
import RangeSlider from "react-range-slider-input";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/api";
import { BallTriangle } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import "../../../node_modules/react-range-slider-input/dist/style.css";
import "../BuyChannel/buychannel.css";
const sampleimage = "https://channelkart.com/admin/images/TL1677956445.jpg"

const BuyYouTubechannel = () => {
  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryLoader , setCategoryLoader] = useState(false);
  const { register, handleSubmit } = useForm();
  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL + `products?id=`);
      setProducts(response?.data?.response);
    } catch (error) {
      console.log(error)
    }
  };
  const getLanguages = async () => {
    try {
      const response = await axios.get(API_URL + `language`);
      setLanguage(response?.data?.response);
    } catch (error) {
      console.log(error)
    }
  };
  const getCategory = async () => {
    try {
      const response = await axios.get(API_URL + `category`);
      setCategory(response?.data?.response);
    } catch (error) {
    }
  };
  useEffect(() => {
    getProducts();
    getLanguages();
    getCategory();
  }, []);
  const getSpeceficCategoryChannels = async (data) => {
    setCategoryLoader(true)
    if (data == "All") {
      try {
        const response = await axios.get(API_URL + `products?id=`);
        setProducts(response?.data?.response);
        setCategoryLoader(false)
      } catch (error) { 
        setCategoryLoader(false)
      }
    } else {
      try {
        const response = await axios.get(API_URL + `products?id=${data}`);
        setProducts(response?.data?.response);
        setCategoryLoader(false)
      } catch (error) {
        setCategoryLoader(false)
      }
    }
  };

  const submitFilterVals = async() => {
    const response = await axios.get(API_URL + `products?id=`);
    setProducts(response?.data?.response);
  };
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
                  Buy Youtube Channel
                </h3>
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <Col lg={12} className="m-0 p-0 d-flex justify-content-center ">
                <p className="text-white d-flex align-items-sm-center ">
                  Want to Buy YouTube channel? We've got you covered! Our
                  platform has a bunch of great monetize Youtube channels for
                  you to choose from. Get ready to grow online with the help of
                  our friendly experts. Start your journey now!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <section className="sub-categori mt-5">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="left-area">
                    <div className="filter-result-area">
                      <div className="header-area">
                        <h4 className="title">Filter Results By</h4>
                      </div>
                      <div className="body-area">
                        <form onSubmit={handleSubmit(submitFilterVals)}>
                          <div className="price-range-block">
                            <div className="col-lg-12">
                              <RangeSlider />
                            </div>

                            <div className="livecount m-0 p-0 text-center mt-5">
                              <input
                                type="number"
                                min={0}
                                {...register("minVal", { required: true })}
                                max={9900}
                                oninput="validity.valid||(value='0');"
                                id="min_price"
                                className="price-range-field"
                              />
                              <span className="px-3">To</span>
                              <input
                                type="number"
                                min={0}
                                {...register("maxVal", {
                                  required: true,
                                })}
                                max={10000}
                                oninput="validity.valid||(value='10000');"
                                id="max_price"
                                className="price-range-field"
                              />
                            </div>
                          </div>
                          <button
                            className="filter-btn price-btn apply-btn my-3"
                            type="submit"
                          >
                            Apply
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="all-categories-area filter-result-area mt-3">
                      <div className="header-area">
                        <h4 className="title">All Categories</h4>
                      </div>
                      <div className="body-area p-4">
                        <div className="accordion" id="accordionExample">
                          <div className="card">
                            <div className="card-header m-0 p-0"   onClick={() =>
                                    getSpeceficCategoryChannels("All")
                                  }>
                              <Link
                                className="button d-inline-block pb-2 cat-anchor"
                                to="#"
                                data-cat_id
                                style={{ color: "#0056b3" }}
                              >
                                <i
                                  className="icofont-thin-double-right"
                                />{" "}
                                All Categories
                              </Link>
                            </div>
                          </div>
                          {category?.map((ele) => {
                            return (
                              <div className="card">
                                <div
                                  className="card-header m-0 p-0"
                                  id="headingOne"
                                >
                                  <Link
                                    className="button d-inline-block pb-2 cat-anchor"
                                    to="#"
                                    data-cat_id={42}
                                    onClick={() =>
                                      getSpeceficCategoryChannels(ele?._id)
                                    }
                                  >
                                    <i className="icofont-thin-double-right" />
                                    {ele?.name}
                                  </Link>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="design-area filter-result-area mt-3">
                      <div className="header-area">
                        <h4 className="title">Language</h4>
                      </div>
                      <div className="body-area">
                        <ul className="filter-list brand-list">
                          {language?.map((ele) => {
                            return (
                              <li className="d-block">
                                <div className="content">
                                  <div className="check-box">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input brand-check"
                                        type="checkbox"
                                        id="b1"
                                        defaultValue={1}
                                      />
                                      <span className="checkmark" />
                                      <label
                                        className="form-check-label brand-label"
                                        htmlFor="b1"
                                      >
                                        {ele?.name}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                          <div className="row">
                            <div className="col-lg-6">
                              <button
                                className="apply-btn filter-btn"
                                type="button"
                                style={{ width: "100%" }}
                              >
                                Apply
                              </button>
                            </div>
                            <div className="col-lg-6">
                              <Link
                                to="#"
                                id="showMore"
                                className="d-inline-block mt-2"
                              >
                                show more
                              </Link>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
               { categoryLoader?
               (
                <h1 className="d-flex justify-content-center m-3 p-3">
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </h1>
               )
               :
                 <div className="chnl_grid row ">
                    {(products.length>0) ? (
                      products?.map((ele) => {
                        return (
                          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
                            <div className="box_grid cnl-slide">
                              <small style={{ backgroundColor: "#858501" }}>
                                Offer
                              </small>
                              <figure className="hoverimg">
                                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
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
                                      <span className="view-image-text">
                                        {ele?.name}
                                      </span>
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
                                  <img
                                    alt=""
                                    className="w-25"
                                    src={userprofie}
                                  />
                                  <span className="ps-2">
                                    <h4>Subscribers</h4>
                                    <p>{ele?.subscriber}</p>
                                  </span>
                                </div>
                                <div className="pts">
                                  <img
                                    alt=""
                                    className="w-25"
                                    src={categories}
                                  />
                                  <span className="ps-2">
                                    <h4>Category</h4>
                                    <p>{ele?.category?.name}</p>
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
                                  <img
                                    alt=""
                                    className="w-25"
                                    src={monetization}
                                  />
                                  <span className="ps-2">
                                    <h4>Monetized</h4>
                                    <p>{ele?.monetized ? "Yes" : "No"}</p>
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
                      })
                    ) : (
                    <h2>No Data Found in this category . Please slect another category ....</h2>
                    )}
                  </div>}
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BuyYouTubechannel;
