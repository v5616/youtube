import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const SellChannel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="Container mt-2 ">
      <div className="boxsize">
        <h3
          className="text-white  sellheadingsfont pt-4 mobile-display px-1"
          data-aos="zoom-in"
        >
          SELL Y<span className="topline pt-2">OUR YOU</span>TUBE CHANNEL WITH
          THE MOST TRUSTED PLATFORM
        </h3>

        <Row className="m-0 p-0">
          <Col lg={12} className="m-0 p-0 d-flex justify-content-center">
            <p className="text-white sellparagraphfont mobile-display px-1">
              Want to sell your youtube channel? Our platform offers top-notch
              services, trusted by thousands of creators, with a straightforward
              and easy process to sell your YouTube channel. Our team of experts
              provide support from start to finish, including negotiating the
              best price and ensuring a secure transaction. With our platform,
              you can sell your channel in the best possible way and get the
              most out of your youtube channel.
            </p>
          </Col>
        </Row>
      </div>
      <Container>
        <Row className="m-0 p-0">
          <Col lg={12}>
            <Row className="m-0 p-0 ">
              <Col lg={12} className="m-0 p-0 d-flex justify-content-center">
                <h3
                  className="text-white  sellheadingsfont pt-4 desktop-display"
                  data-aos="zoom-in"
                >
                  SELL YOUR YOUTUBE CHANNEL
                  <span className="topline pt-2"> WITH </span>THE MOST TRUSTED
                  PLATFORM
                </h3>
              </Col>
            </Row>

            <Row className="m-0 p-0">
              <Col lg={12} className="m-0 p-0 d-flex justify-content-center">
                <p className="text-white sellparagraphfont ">
                  Want to sell your youtube channel? Our platform offers
                  top-notch services, trusted by thousands of creators, with a
                  straightforward and easy process to sell your YouTube channel.
                  Our team of experts provide support from start to finish,
                  including negotiating the best price and ensuring a secure
                  transaction. With our platform, you can sell your channel in
                  the best possible way and get the most out of your youtube
                  channel.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-md-4 mt-1">
          <Col className="d-flex justify-content-center" lg={12}>
            <p className="sellheadings  ">
              Fill Details in The Form Below and Get Free Channel Valuation
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg={12} className="mt-1">
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Your name
                          <span className="text-danger">* </span>:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="text-danger">
                            This field is required *
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Your WhatsApp Number
                          <span className="text-danger">*</span>:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          {...register("whatsappno", {
                            required: true,
                          })}
                        />
                        {errors.whatsappno?.type === "required" && (
                          <span className="text-danger">
                            This field is required *{" "}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mt-1">
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Channel Link
                          <span className="text-danger">* </span>:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("link", { required: true })}
                        />
                        {errors.link && (
                          <span className="text-danger">
                            This field is required *
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Monetization Status
                          <span className="text-danger">*</span>:
                        </Form.Label>
                        <Form.Select
                          {...register("monetization", {
                            required: true,
                          })}
                        >
                          <option value="0">select</option>
                          <option value="1">Monetized</option>
                          <option value="2"> Non Monetized</option>
                          <option value="3">Demonetized</option>
                        </Form.Select>

                        {errors.monetization?.type === "required" && (
                          <span className="text-danger">
                            This field is required *{" "}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mt-1">
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Your Email
                          <span className="text-danger">* </span>:
                        </Form.Label>
                        <Form.Control
                          type="mail"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-danger">
                            This field is required *
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Expected price (With Currency)
                          <span className="text-danger">*</span>:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("price", {
                            required: true,
                          })}
                        />
                        {errors.price?.type === "required" && (
                          <span className="text-danger">
                            This field is required *{" "}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mt-1">
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formheading">
                          Are you human? 3 + 1 =
                          <span className="text-danger">* </span>:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("question", { required: true })}
                        />
                        {errors.question && (
                          <span className="text-danger">
                            This field is required *
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <input type="checkbox" id="" name="" value="" />
            <label className="formheading">
              You have read and agree with the T&C , Privacy Policy
            </label>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button
              className="px-4 fw-bold"
              style={{ backgroundColor: "#1e3f55" }}
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Row>
                  <Col>
                    <p className="cardparagraph">
                      Selling a youtube channel may be tedious. With
                      Channelkart, you can expect a smooth and efficient selling
                      process. Our team will evaluate your channel based on its
                      analytics to ensure you receive the best price possible.
                      Our platform has a large and engaged audience, giving you
                      the confidence that your channel will be in good hands.
                      Plus, with over 2000+ satisfied creators, you can trust
                      that Channelkart will provide a hassle-free and
                      trustworthy experience. Don't waste any more time, fill
                      out the form, connect with our seller support team, and
                      get ready to sell your YouTube channel with ease. Join the
                      ranks of successful creators and start your journey with
                      Channelkart today! After sending the message on WhatsApp
                      you have to provide 5-7 screenshots of your channel
                      analytics over Whatsapp chat for better price evaluation.
                      These screenshots are…
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Row>
                      <Col lg={6}>
                        <h5 className="formheading  text-dark">
                          NOTE : To sell a channel, it must have minimum 1000
                          subscribers.
                        </h5>
                        <ul className="cardparagraph m-0 p-0">
                          <li>1- Youtube studio Home page</li>
                          <li>2- Lifetime views</li>
                          <li>3- Views in the last 28 days</li>
                          <li>4- Impression in the last 28 days</li>
                          <li>
                            5- Watch Time(If the channel is not monetized)
                          </li>
                          <li>6- last 28 days revenue(if monetized)</li>
                          <li>7- last 3 months revenue(if monetized)</li>
                          <li>8- lifetime revenue(if monetized)</li>
                        </ul>
                      </Col>
                      <Col lg={6}>
                        <iframe
                          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                          title="video"
                          width="100%"
                          height="100%"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4 ">
                  <Col>
                    <p className="cardparagraph">
                      At Channelkart, we're committed to making the process of
                      selling your YouTube channel as seamless as possible. Our
                      seller support team may reach out to you via WhatsApp for
                      any additional information needed to evaluate your channel
                      accurately. Our team will then determine the selling price
                      based on the channel's analytics. Only after you agree to
                      the offered price will the sale proceed. Let Channelkart
                      help you turn your channel into a profitable investment.
                      Get in touch with us now!
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SellChannel;
