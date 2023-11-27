import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./pages/About/about";
import Blogs from "./pages/Blogs/blogs";
import Navbar from "./pages/header/header";
import SellChannel from "./pages/SellChannel/sellChannel";
import Buychannel from "./pages/HowTo/buychannel";
import BuyYouTubeChannel from "./pages/BuyChannel/buychannel";
import SellYouTubechannel from "./pages/HowTo/sellchannel";
import Home from "./pages/Home/home";
import Contact from "./pages/ContactUs/contact";
import Footer from "./pages/footer/footer";
import Wtsapp from "./pages/wtsapp";
import Detailpage from "./pages/Home/detailpage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Wtsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Detailpage" element={<Detailpage />} />
          <Route path="/buy_YouTubechannel" element={<BuyYouTubeChannel />} />
          <Route path="/sell_Channel" element={<SellChannel />} />
          <Route path="/buy_channel" element={<Buychannel />} />
          <Route path="/sell_YouTubeChannel" element={<SellYouTubechannel />} />
          {/* <Route
            path="/sell_YouTubeChannel"
            element={<SellYouTubechannel />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
