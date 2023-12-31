import React from "react";
import { styled } from "styled-components";

import coin98 from "../../../assets/coin98.svg";
import orion from "../../../assets/orion.svg";
import chainlink from "../../../assets/chainlink.svg";
import parsiq from "../../../assets/parsiq.svg";
import fractal from "../../../assets/fractal.svg";
import blocksync from "../../../assets/blocksync.svg";
import cryptocom from "../../../assets/crypto.com.svg";
import cryptoslate from "../../../assets/cryptoslate.svg";
import SectionContainer from "./atoms/SectionContainer";

const SectionThree: React.FC = () => {
  return (
    <SectionContainer id="partners" nobg>
      <InnerContainer>
        <h3>Corporate Partners</h3>
        <LogoContainer>
          <div>
            <img src={parsiq} alt="" />
          </div>
          <div>
            <img src={coin98} alt="" />
          </div>
          <div>
            <img src={orion} alt="" />
          </div>
          <div>
            <img src={cryptocom} alt="" />
          </div>
          <div>
            <img src={cryptoslate} alt="" />
          </div>

          <div>
            <img src={chainlink} alt="" />
          </div>
          <div>
            <img src={fractal} alt="" />
          </div>
          <div>
            <img src={blocksync} alt="" />
          </div>
        </LogoContainer>
      </InnerContainer>
    </SectionContainer>
  );
};

export default SectionThree;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  h3 {
    font-size: 28px;
    letter-spacing: 7px;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 24px;

  div {
    color: #fff;
    width: 180px;

    img {
      width: 100%;
    }

    @media (max-width: 800px) {
      width: 120px;
    }
  }

  @media (max-width: 708px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
