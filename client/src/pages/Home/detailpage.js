import React from "react";
import { Container } from 'react-bootstrap'
const Detailpage = () => {
  return (
    <>
    <Container>
    <div className="row">
        <div className="col-7"></div>
        <div className="col-5">
          <div
            style={{
              boxShadow: "0px 0px 5px 0px rgba(14, 35, 107, 0.15)",
              bordeRadius: "6px",
            }}
          >
            <p>StartDate</p>
            <p>Category</p>
          </div>
        </div>
      </div>
    </Container>
    
    </>
  );
};

export default Detailpage;
