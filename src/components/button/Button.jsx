import React from "react";
import styled from "styled-components";
import loader from "../../assets/svgs/loader.svg";

const Button = ({ label, className, loading = false, ...rest }) => {
  return (
    <BasicButton className={className} {...rest}>
      {loading ? <ButtonLoader src={loader} /> : label}
    </BasicButton>
  );
};

export { Button };

const BasicButton = styled.button`
  
`;
const ButtonLoader = styled.img`
  
`;
