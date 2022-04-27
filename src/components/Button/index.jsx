import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: ${(props) => props.padding || `15px 46px`};
  background: ${(props) => props.background || `#333`};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: ${(props) => props.width || ``};

  cursor: pointer;
  color: ${(props) => props.color || `#ffffff`};
  border: ${(props) =>
    `1px solid ${props.outline} !important ` || `0 !important`};
`;

const Button = ({
  style,
  padding,
  outline,
  color,
  content,
  background,
  onClick,
  width,
}) => {
  return (
    <Wrapper
      background={background}
      color={color}
      style={style}
      padding={padding}
      outline={outline}
      onClick={onClick}
      width={width}
    >
      {content}
    </Wrapper>
  );
};

export default Button;
