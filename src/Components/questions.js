import React from "react";
import Home from "../Pages/home";
import { obj } from "../Content/interviewQ";

const Questions = () => {
  return (
    <div>
      <Home />
      <div id="accordion" style={{ marginTop: "70px" }}>
        {obj.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header" id="headingOne">
              {console.log(index)}
              <h5 className="mb-0">
                <button
                  className="btn"
                  data-toggle="collapse"
                  data-target={"#collapse" + index}
                  aria-controls={"collapse" + index}
                >
                  <b>{item.Q}</b>
                </button>
              </h5>
            </div>

            <div
              id={"collapse" + index}
              className={index === 0 ? "collapse show" : "collapse"}
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">{item.A}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
