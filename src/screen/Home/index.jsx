import React, { useState } from "react";
import Button from "../../components/Button";
import Form from "../Form";
import { Wrapper } from "./style";

const Home = () => {
  const [view, setView] = useState("welcome");

  return (
    <Wrapper>
      {view === "welcome" ? (
        <div className="welcome-div">
          <h1>Hello There!</h1>
          <p>Lets buy some insurance. it is going to take only a few steps</p>
          <div className="btn-div">
            <Button
              content="Start"
              padding="25px "
              background="#000"
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "system-ui",
                minWidth: "200px",
              }}
              onClick={() => setView("form")}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {view !== "welcome" ? <Form setView={setView} view={view} /> : ""}
    </Wrapper>
  );
};

export default Home;
