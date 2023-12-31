import React from "react";
import { styled } from "styled-components";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { RxExit } from "react-icons/rx";
import { Button } from "../../../styles/element.styled";
import { shortenAddress } from "../../../utils/shortenAddress";

const AppHeader: React.FC = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <HeaderContainer>
      <HeaderDetails>
        {isConnected ? (
          <ConnectButton>
            <p>0.00 AGEMS</p>
            <Connected>
              {/* <AiOutlineWallet /> */}
              <p>prince.eth</p>
              <small>{shortenAddress(address as string)}</small>
            </Connected>
            <RxExit
              style={{ cursor: "pointer" }}
              onClick={() => disconnect()}
            />
          </ConnectButton>
        ) : (
          <ConnectButton>
            <Button onClick={() => open()}>connect wallet</Button>
          </ConnectButton>
        )}
      </HeaderDetails>
    </HeaderContainer>
  );
};

export default AppHeader;

const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  font-family: "Tomorrow";
  top: 0;
  background-color: rgb(4, 8, 16);
  z-index: 9;
  padding: 24px 64px;
  @media (max-width: 580px) {
    padding: 24px;
  }
`;

const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ConnectButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 38px;

  button {
    display: flex;

    svg {
      font-size: 24px;
    }
  }

  > svg {
    font-size: 20px;
    margin-top: 8px;
  }

  > button {
    display: flex;
    max-width: 222px;
    width: 100%;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #000;
    font-family: "Tomorrow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Connected = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  /* padding: 14px 24px; */
  /* border: 3px solid gold;
  border-radius: 50px; */
  cursor: pointer;

  svg {
    font-size: 22px;
  }

  p {
    font-size: 18px;
  }

  small {
    font-size: 14px;
  }
`;
