import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { elastic as ElasticMenu } from "react-burger-menu";
import { mobileSize } from "utils";
// Images
import navbar_bg from "assets/navbar_bg.svg";
import logo from "assets/logo.svg";
import loupe from "assets/loupe.svg";
import user from "assets/user.png";
import cart from "assets/cart.png";

function Navbar({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <StyledMenu isOpen={isOpen}>
          <NavLink to="/">123</NavLink>
        </StyledMenu>
      )}
      <Container>
        <Row>
          {isMobile && <MenuOutlined style={{ fontSize: 26, marginRight: 10, color: "#fff" }} onClick={() => toggleMenu()} />}

          {!isMobile && (
            <LogoWrapper to="/">
              <img src={logo} alt="Bzar" />
            </LogoWrapper>
          )}

          <InputWrapper>
            <input type="text" placeholder="Поиск" />
          </InputWrapper>
          {!isMobile && (
            <UserBlock>
              <Link to="/cart">
                <img src={cart} alt="Корзина" />
                <div>Корзина</div>
              </Link>
              <Link to="/cabinet">
                <img src={user} alt="Кабинет" />
                <div>Кабинет</div>
              </Link>
            </UserBlock>
          )}
        </Row>
      </Container>
    </>
  );
}

function StyledMenu({ isOpen, children, ...rest }) {
  return (
    <ElasticMenu isOpen={isOpen} customBurgerIcon={false} {...rest}>
      {children}
    </ElasticMenu>
  );
}

let LogoWrapper = styled(Link)``;

let Container = styled.div`
  width: 100%;
  padding: 40px 60px;
  min-height: 275px;
  background: radial-gradient(103.57% 5048.49% at 0% 0%, #f65e69 0%, #ffad64 45.23%, #a804ab 100%);
  background-image: url(${navbar_bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${mobileSize}px) {
    padding: 10px 20px;
  }
`;

let Row = styled.div`
  display: flex;
  align-items: center;
`;

let InputWrapper = styled.div`
  margin: 0 20px;
  position: relative;
  flex-basis: 100%;

  @media (max-width: ${mobileSize}px) {
    margin: 0;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 20px 30px 20px 70px;
    width: 100%;
    color: #fff;
    &::-webkit-input-placeholder {
      color: #fff;
    }
  }

  &:before {
    content: url(${loupe});
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    display: flex;
    align-items: center;
  }
`;

let UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 0 10px;
    text-align: center;
    color: #fff;
    padding: 0 5px;

    div {
      margin-top: 5px;
    }
    @media (max-width: ${mobileSize}px) {
      font-size: 1rem;
      img {
        height: 36px;
      }
    }
  }
`;

export default Navbar;
