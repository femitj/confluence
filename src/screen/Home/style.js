import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  min-height: 70vh;
  font-family: system-ui;
  .welcome-div {
    width: 60%;
    margin: 40px;
    text-align: center;
    background: #fafafa;
    padding: 40px;
    h1 {
      font-size: 3rem;
      margin-bottom: 50px;
    }
    p {
      font-size: 1.5rem;
      color: #1c1c1c;
      margin-bottom: 40px;
    }
    .btn-div {
      margin: auto;
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
