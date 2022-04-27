import React, { useState } from "react";
import Input, { CheckInput, SelectInput } from "../../components/Input";
import Button from "../../components/Button";
import { Wrapper } from "./style";

const Form = ({ view, setView }) => {
  const [data, setData] = useState({
    package: "standard",
  });
  const countries = [
    { label: "Hong Kong", currency: "HKD", rate: 1 },
    { label: "USA", currency: "USD", rate: 2 },
    { label: "Australia", currency: "AUD", rate: 3 },
  ];

  const premium = 10 * data?.age * data?.rate;

  const handlePremium = () => {
    if (data?.package === "standard") {
      return premium;
    }
    if (data?.package === "standard") {
      return premium;
    }
    if (data?.package === "safe") {
      return 1.5 * premium;
    }
    if (data?.package === "super") {
      return 1.75 * premium;
    }
  };

  console.log(data);

  return (
    <Wrapper>
      <h1>
        {view === "form"
          ? "Tell us about yourself"
          : view === "summary"
          ? "Summary"
          : "Oooops"}
      </h1>

      {view === "form" ? (
        <div className="input-wrap">
          <div className="inputCont">
            <Input
              label="Name"
              value={data?.name}
              placeholder="Add text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="inputCont">
            <Input
              label="Age"
              placeholder="Add age"
              value={data?.age}
              onChange={(e) =>
                setData({ ...data, age: Number(e.target.value) })
              }
            />
          </div>
          <div className="inputCont">
            <SelectInput
              label="Where do you live"
              options={countries}
              optionValue="currency"
              value={data?.currency}
              placeholder="select country"
              onChange={(value) => {
                setData({
                  ...data,
                  currency: value,
                  rate: countries.find((country) => country.currency === value)
                    ?.rate,
                  country: countries.find(
                    (country) => country.currency === value
                  )?.label,
                });
              }}
            />
          </div>

          <CheckInput
            checked={data?.package === "standard"}
            label="Standard"
            onChange={(e) => setData({ ...data, package: "standard" })}
          />

          <CheckInput
            checked={data?.package === "safe"}
            label="Safe"
            onChange={() => setData({ ...data, package: "safe" })}
          />

          <CheckInput
            checked={data?.package === "super"}
            label="Super Safe"
            onChange={() => setData({ ...data, package: "super" })}
          />

          <h3>
            Your Premium is:{" "}
            {!premium ? 0 : `${handlePremium()} ${data?.currency}`}
          </h3>
        </div>
      ) : (
        ""
      )}

      {view === "summary" ? (
        <div className="summary">
          <h3>{data?.name}</h3>

          <p>Name : {data?.name}</p>
          <p>Age : {data?.age}</p>
          <p>Where do you live : {data?.country}</p>
          <p>Package : {data?.package}</p>
          <p>
            Premium : {!premium ? 0 : `${handlePremium()} ${data?.currency}`}
          </p>
        </div>
      ) : (
        ""
      )}
      {view === "error" ? (
        <div className="error">
          <h3>{data?.name}</h3>

          <p>Your age is over our accepted limit</p>
          <p>We are sorry but we cannot insure you now</p>
        </div>
      ) : (
        ""
      )}

      {view !== "error" ? (
        <div className="nav-div">
          <Button
            content="Back"
            onClick={() =>
              view === "summary" ? setView("form") : setView("welcome")
            }
            background="#fff"
            color="#000"
            outline="#000"
          />
          <Button
            content="Next"
            onClick={() =>
              data?.age > 100 ? setView("error") : setView("summary")
            }
          />
        </div>
      ) : (
        ""
      )}
      {view === "error" ? (
        <div className="btn-div">
          <Button
            content="Ok :("
            padding="10px "
            background="#000"
            style={{
              fontWeight: "normal",
              fontSize: "1.5rem",
              fontFamily: "system-ui",
              minWidth: "200px",
            }}
            onClick={() => setView("welcome")}
          />
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Form;
