import React from "react";
import { Button, Container } from "react-bootstrap";
import whatsapp from "../../images/whatsapp.png";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imageone from "../../images/Screenshotthree.png";
import imagetwo from "../../images/Screenshottwo.png";
import imagethree from "../../images/Screenshotone.png";
const Detailpage = () => {
  const FAQ = [
    {
      question: "How safe and secure is the process ?",
      answer:
        "Your safety and trust is our top priority. That's why we've implemented secure processes and a trusted platform for buying and selling YouTube channels.",
    },
    {
      question: "How can I get more information about the channel? ",
      answer:
        "Looking for More Information Before You Buy a Channel? Simply Request it! Our Team Will Provide You with All the Details You Need. In Some Cases, a 10% Advance Payment May Be Requested for Privacy Purposes, but Rest Assured that it's Fully Refundable if You Decide Not to Buy.",
    },
    {
      question: "How long does it take to receive the channel after payment? ",
      answer:
        "As Soon as Your Payment is Received, We'll Initiate the Transfer Process. In Most Cases, You Can Expect to Receive the Channel within 30 Minutes. However, Depending on Circumstances, it May Take Up to 24 Hours for the Transfer to Complete.        ",
    },
    {
      question:
        "Can I Instantly Start Working on My Purchased YouTube Channel ?  ",
      answer:
        "Yes, once you have successfully purchased a YouTube channel and the transfer process has been completed, you can instantly start managing it as the new owner.",
    },
    {
      question: "How will I receive the channel after payment? ? ",
      answer:
        "After We Receive Your Payment, We'll Ask You to Provide the Gmail Address Where You'd Like to Receive the Channel. Then, We'll Send You an Ownership Request on That Gmail, Allowing You to Take Control of Your New Channel Quickly and Easily.",
    },
    {
      question: "How do I make the payment for the channel? ",
      answer:
        "We offer a range of payment options including UPI, bank transfer, and Paypal, to make the process as convenient as possible for you. Simply choose the method that works best for you and we will take care of the rest.",
    },
  ];

  return (
    <>
      <Container className="my-4">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-sm-12 mb-5">
            <div>
              <Carousel>
                <div>
                  <img src={imageone} />
                </div>
                <div>
                  <img src={imagetwo} />
                </div>
                <div>
                  <img src={imagethree} />
                </div>
              </Carousel>
            </div>
            <div>
              <h3 className="text-center text-dark">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="faq">
              {FAQ.map((question) => (
                <details open={FAQ.indexOf(question) == 0}>
                  <summary>{question.question}</summary>
                  {question.answer}
                </details>
              ))}
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 mt-3 mt-md-0 mt-lg-0">
            <div
              style={{
                boxShadow: "0px 0px 5px 0px rgba(14, 35, 107, 0.15)",
                bordeRadius: "6px",
              }}
            >
              <div className="d-flex justify-content-around pt-3">
                <div>
                  <p className="m-0 p-0 " style={{ color: "#808080de" }}>
                    StartDate
                  </p>
                  <h6 className="m-0 p-0">2021-06-24</h6>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#808080de" }}>
                    Revenue Sources
                  </p>
                  <h6 className="m-0 p-0">YPP</h6>
                </div>
              </div>
              <div className="d-flex justify-content-around pt-3 ">
                <div>
                  <p className="m-0 p-0" style={{ color: "#808080de" }}>
                    Category
                  </p>
                  <h6 className="m-0 p-0">Gaming</h6>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#808080de" }}>
                    Monthly Revenue
                  </p>
                  <h6 className="m-0 p-0">--</h6>
                </div>
              </div>

              <div className="d-flex text-center justify-content-center mt-4 pb-4">
                <Button className="buynow_button">
                  {" "}
                  <img src={whatsapp} /> Buy Now
                </Button>
              </div>
            </div>
            <div
              className="mt-3 mb-4"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(14, 35, 107, 0.15)",
                bordeRadius: "6px",
              }}
            >
              <h3 className="text-dark ps-5 pt-4">Summary</h3>
              <div className="side_head d-flex justify-content-center">
                <table
                  id="tablepress-362"
                  className="tablepress  tablepress-id-362"
                >
                  <tbody>
                    <tr className="row-1">
                      <td className="column-1">Status</td>
                      <td
                        className="column-2"
                        style={{ color: "green", fontWeight: "bold" }}
                      >
                        Available
                      </td>
                    </tr>
                    <tr className="row-1">
                      <td className="column-1">Listing ID</td>
                      <td className="column-2">YT244AD</td>
                    </tr>
                    <tr className="row-3">
                      <td className="column-1">Subscribers</td>
                      <td className="column-2">35330</td>
                    </tr>
                    <tr className="row-4">
                      <td className="column-1"> Creation Date</td>
                      <td className="column-2">24-06-2021</td>
                    </tr>
                    <tr className="row-5">
                      <td className="column-1">Category</td>
                      <td className="column-2">Gaming</td>
                    </tr>
                    <tr className="row-6">
                      <td className="column-1">Language</td>
                      <td className="column-2">Hindi</td>
                    </tr>
                    <tr className="row-7">
                      <td className="column-1">Channel Type</td>
                      <td className="column-2">Both Long &amp; Short Videos</td>
                    </tr>
                    <tr className="row-8">
                      <td className="column-1">Content Type</td>
                      <td className="column-2">New</td>
                    </tr>
                    <tr className="row-16">
                      <td className="column-1">Real-time Views</td>
                      <td className="column-2">2613</td>
                    </tr>
                    <tr className="row-11">
                      <td className="column-1">Views(Last 28 Days)</td>
                      <td className="column-2">20.3K</td>
                    </tr>
                    <tr className="row-10">
                      <td className="column-1">Life Time Views</td>
                      <td className="column-2">3.2M</td>
                    </tr>
                    <tr className="row-12">
                      <td className="column-1">Active Copyright Strike</td>
                      <td className="column-2">None</td>
                    </tr>
                    <tr className="row-13">
                      <td className="column-1">Active Community Strike </td>
                      <td className="column-2">None</td>
                    </tr>
                    <tr className="row-14">
                      <td className="column-1">Monetized </td>
                      <td className="column-2">Yes</td>
                    </tr>
                    <tr className="row-14">
                      <td className="column-1">Revenue(Last 28 Days)</td>
                      <td className="column-2">$0.1</td>
                    </tr>
                    <tr className="row-15">
                      <td className="column-1">Life Time Revenue </td>
                      <td className="column-2">$30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Detailpage;
