import React from "react";
import styled from "styled-components";

// components
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ProductSection = ({
  productName,
  productSub,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <StyledProductSection>
      <StyledProductInfo>
        <h2>{productName}</h2>
        <p>{productSub}</p>
      </StyledProductInfo>
      <StyledButtonContainer>
        <PrimaryButton linkText={"Primary Button"} />
        <SecondaryButton linkText={"Secondary Button"} />
      </StyledButtonContainer>
    </StyledProductSection>
  );
};

const StyledProductSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledProductInfo = styled.div`
  margin-bottom: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h2 {
    font-size: 2.3rem;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ProductSection;
