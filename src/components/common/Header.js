import styled from "styled-components";
import { Container } from "./Container";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo src="images/logo.png"></Logo>
      <Actions>
        <Language>
          <div>
            <img src="images/browser-svgrepo-com.svg" alt="" />
            <select name="language">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>
        </Language>
        <Signin>Sign In</Signin>
      </Actions>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 75px;
  margin-left: 5px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Language = styled.div`
  div {
    img {
      height: 20px;
    }
    select {
      background-color: transparent;
      color: white;
      border: none;
      font-weight: bold;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;
const Signin = styled.button`
  padding: 9px 15px;
  background: var(--netflix-red);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
