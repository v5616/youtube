import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/pppppp.png";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar} `}>
          {/* logo */}
          <Link to = "/">
            <img alt=""  className={`${styles.logo}`} src={logo} />
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={styles.navvlink}>
                <h6 className={`${styles.navLink} m-0 `}>Home</h6>
              </Link>
            </li>
            <li className="text-nowrap" onClick={removeActive}>
          <Link to="/buy_YouTubechannel" className={styles.navvlink}>  <h6 className={`${styles.navLink} m-0 `}>Buy Channel </h6></Link>  
            </li>
            <li className="text-nowrap" >
              {/* <h6 className={`${styles.navLink} m-0 `}>How To</h6> */}
              <h6 className="m-0">
                {" "}
                <NavDropdown title="How To" id="basic-nav-dropdown">
                  <Link to="/buy_channel" className={styles.navvlink}>
                    <NavDropdown.Item  className="fw-8" onClick={removeActive}>
                      Buy YouTube Channel
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/sell_YouTubeChannel" className={styles.navvlink}>
                    
                    <NavDropdown.Item hr className="fw-8" onClick={removeActive}>
                      Sell YouTube Channel
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item className="fw-8" onClick={removeActive}>
                    Move Channel to Brand Account
                  </NavDropdown.Item>
                </NavDropdown>
              </h6>
            </li>
            <li className="text-nowrap" onClick={removeActive}>
              <Link to="/blogs" className={styles.navvlink}>
                {" "}
                <h6 className={`${styles.navLink} m-0 `}>Blogs</h6>{" "}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={styles.navvlink}>
                {" "}
                <h6 className={`${styles.navLink} m-0 `}>About</h6>{" "}
              </Link>
            </li>
            <li className="text-nowrap" onClick={removeActive}>
              <Link to="/sell_Channel" className={styles.navvlink}>
                {" "}
                <Button className={`${styles.navLink} ${styles.buttoncolor} `}>
                  Sell Channel
                </Button>
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
