import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../BuyChannel/buychannel.css"
import userprofie from "../../images/users-icon.png";
import lang from "../../images/lang.png";
import categories from "../../images/categories.png";
import monetization from "../../images/monetization.png";
import RangeSlider from 'react-range-slider-input';
import '../../../node_modules/react-range-slider-input/dist/style.css';
import { Link } from "react-router-dom";
const BuyYouTubechannel = () => {
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
              <h4 className="title">
                Filter Results By
              </h4>
            </div>
            <div className="body-area">
              <form action="#">
                <div className="price-range-block">
                  <div className="col-lg-12"><RangeSlider/></div>

                  <div className="livecount m-0 p-0 text-center mt-5">
                    <input type="number" min={0} max={9900} oninput="validity.valid||(value='0');" id="min_price" className="price-range-field" />
                    <span className="px-3">To</span>
                    <input type="number" min={0} max={10000} oninput="validity.valid||(value='10000');" id="max_price" className="price-range-field" />
                  </div>
                </div>
                <button className="filter-btn price-btn apply-btn my-3" type="button">Apply</button>
              </form>
            </div>
          </div>
          <div className="all-categories-area filter-result-area mt-3">
            <div className="header-area">
              <h4 className="title">
                All Categories
              </h4>
            </div>
            <div className="body-area p-4">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header m-0 p-0">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id style={{color: '#0056b3'}}>
                      <i className="icofont-thin-double-right" /> All Categories
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={42}>
                      <i className="icofont-thin-double-right" />Finance
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={47}>
                      <i className="icofont-thin-double-right" />Comedy
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={48}>
                      <i className="icofont-thin-double-right" />Education
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={49}>
                      <i className="icofont-thin-double-right" />Entertainment
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={50}>
                      <i className="icofont-thin-double-right" />Film and  Animation
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={51}>
                      <i className="icofont-thin-double-right" />Gaming
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={52}>
                      <i className="icofont-thin-double-right" />How to and Style
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={53}>
                      <i className="icofont-thin-double-right" />Music
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={54}>
                      <i className="icofont-thin-double-right" />News and Politics
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={55}>
                      <i className="icofont-thin-double-right" />Non profits and Activism
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={56}>
                      <i className="icofont-thin-double-right" />People and Blogs
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={57}>
                      <i className="icofont-thin-double-right" />Pets and  Animals
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={58}>
                      <i className="icofont-thin-double-right" />Science and Technology
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={59}>
                      <i className="icofont-thin-double-right" />Sports
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={60}>
                      <i className="icofont-thin-double-right" />Travel and  Events
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={61}>
                      <i className="icofont-thin-double-right" />Mixed Content
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={63}>
                      <i className="icofont-thin-double-right" />Spiritual
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={64}>
                      <i className="icofont-thin-double-right" />Religious
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={65}>
                      <i className="icofont-thin-double-right" />Fishing
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={66}>
                      <i className="icofont-thin-double-right" />Vlogging
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header m-0 p-0" id="headingOne">
                    <Link className="button d-inline-block pb-2 cat-anchor" to="#" data-cat_id={67}>
                      <i className="icofont-thin-double-right" />Motivational
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design-area filter-result-area mt-3">
            <div className="header-area">
              <h4 className="title">
                Language
              </h4>
            </div>
            <div className="body-area">
              <ul className="filter-list brand-list">
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b1" defaultValue={1} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b1">
                          TAMIL
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b2" defaultValue={2} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b2">
                          KANADAM
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b3" defaultValue={3} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b3">
                          MALAYALAM
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b4" defaultValue={4} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b4">
                          TELUGU
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b5" defaultValue={5} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b5">
                          ENGLISH
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block">
                  <div className="content">
                    <div className="check-box">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input brand-check" type="checkbox" id="b6" defaultValue={6} />
                        <span className="checkmark" />
                        <label className="form-check-label brand-label" htmlFor="b6">
                          HINDI
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="row">
                  <div className="col-lg-6">
                    <button className="apply-btn filter-btn" type="button" style={{width: '100%'}}>Apply</button>
                  </div>
                  <div className="col-lg-6">
                    <Link to="#" id="showMore" className="d-inline-block mt-2">show more</Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          {/* <div className="categori-select-area filter-result-area mt-3">
            <div className="header-area">
              <h4 className="title">
                Audience Age
              </h4>
            </div>
            <div className="body-area p-4">
              <select name="fuel_type_id" id="selFuel">
                <option selected disabled value>Select Audience Age</option>
                <option value={13}>13–17 years</option>
                <option value={14}>18–24 years</option>
                <option value={15}>25–34 years</option>
                <option value={16}>35–44 years</option>
                <option value={17}>45–54 years</option>
                <option value={18}>55–64 years</option>
                <option value={19}>65+ years</option>
              </select>
            </div>
          </div>
          <div className="categori-select-area filter-result-area mt-3">
            <div className="header-area">
              <h4 className="title">
                Active Copyright Strike
              </h4>
            </div>
            <div className="body-area p-4">
              <select name="transmission_type_id " id="selTransmission">
                <option selected disabled value>Select Active Copyright Strike</option>
                <option value={5}>NO</option>
                <option value={6}>YES</option>
              </select>
            </div>
          </div>
          <div className="categori-select-area filter-result-area mt-3">
            <div className="header-area">
              <h4 className="title">
                Monetized
              </h4>
            </div>
            <div className="body-area p-4">
              <select id="selCondition" name="condition_id">
                <option value selected disabled>Select a Monetized</option>
                <option value={6}>Monetization</option>
                <option value={7}>Non - Monetization</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
              
              <div className="col-md-9">
              <div className="chnl_grid row ">
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "#858501" }}>Offer</small>
              <figure className="hoverimg">
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
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
                <h6>Cartoon Animation Youtube Channel For Sale</h6>
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
                    <p>253,000+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Animation</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>Not Applicable</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: Nil</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "rgba(66, 188, 21, 0.97)" }}>
                New
              </small>
              <figure>
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
                <Link to="#">
                  <div className="image-container">
                    <img alt=""
                      src="https://channelkart.com/admin/images/TL1685720235.jpg"
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
                <h6>Viral Shorts Youtube Channel For Sale | YT339PO</h6>
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
                    <p>142,374+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Entertainment</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>Hindi</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: Nil</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "#858501" }}>Offer</small>
              <figure>
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
                <Link to="#">
                  <div className="image-container">
                    <img alt=""
                      src="https://channelkart.com/admin/images/TL1686242170.jpg"
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
                <h6>Entertainment Youtube Channel for Sale</h6>
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
                    <p>58,684+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Entertainment</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>Hindi</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: Nil</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "#858501" }}>Offer</small>
              <figure>
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
                <Link to="#">
                  <div className="image-container">
                    <img alt=""
                      src="https://channelkart.com/admin/images/TL1686245876.jpg"
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
                <h6>Facts Youtube Channel For Sale | YT354XQ</h6>
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
                    <p>369,664+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Entertainment</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>Hindi</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: Nil</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "rgba(66, 188, 21, 0.97)" }}>
                New
              </small>
              <figure>
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
                <Link to="#">
                  <div className="image-container">
                    <img alt=""
                      src="https://channelkart.com/admin/images/TL1688737547.jpg"
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
                <h6>Entertainment Shorts Youtube Channel for Sale</h6>
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
                    <p>155,454+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Entertainment</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>Hindi</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: $110+</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
          <div className="chl_det col-md-6 col-sm-12 col-lg-4">
            <div className="box_grid cnl-slide">
              <small style={{ backgroundColor: "rgba(66, 188, 21, 0.97)" }}>
                New
              </small>
              <figure>
                {/*---<Link to="#0" class="wish_bt"></Link> ---*/}
                <Link to="#">
                  <div className="image-container">
                    <img alt=""
                      src="https://channelkart.com/admin/images/TL1693313355.png"
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
                <h6>Facts Shorts Youtube Channel For Sale | YT484WT</h6>
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
                    <p>39,530+</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={categories} />
                  <span className="ps-2">
                    <h4>Category</h4>
                    <p>Entertainment</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={lang} />
                  <span className="ps-2">
                    <h4>Language</h4>
                    <p>English</p>
                  </span>
                </div>
                <div className="pts">
                  <img alt="" className="w-25" src={monetization} />
                  <span className="ps-2">
                    <h4>Monetized</h4>
                    <p>No</p>
                  </span>
                </div>
              </div>
              <div className="revenue">
                <p>Life Time Revenue: Nil</p>
              </div>
              <div className="act_btn"> </div>
            </div>
          </div>
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
