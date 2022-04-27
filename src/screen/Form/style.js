import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  margin: 40px;
  text-align: center;
  background: #fafafa;
  padding: 40px;
  h1 {
    font-size: 3rem;
  }
  .input-wrap {
    width: 50%;
    margin: 0 auto;
    .inputCont {
      margin-bottom: 24px;
    }
  }
  .summary {
    p {
      margin-bottom: 10px;
    }
  }
  .error {
  }

  .nav-div {
    width: 50%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-top: 30px;
  }
  .btn-div {
    margin: auto;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
