import React from "react";
import styled from "styled-components";

const ProductSection = () => {
  return (
    <StyledProductSection>
      <StyledProductInfo>
        <h2>Model 3</h2>
        <p>Order Online for Touchless Delivery</p>
      </StyledProductInfo>
      <StyledButtonContainer>
        <a href='#'>Customer Order</a>
        <a href='#'>Existing Inventory</a>
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

const StyledButtonContainer = styled.div``;

export default ProductSection;
