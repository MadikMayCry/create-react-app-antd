import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidV4 } from "uuid";
import { MainTitle } from "components";

function SideShops() {
  let [shops, setShops] = useState([
    {
      img_1: "lumene_1.png",
      img_2: "lumene_2.png",
      img_3: "lumene_3.png",
      logo: "lumene_logo.png",
      category: "Косметика",
      subcategory: "Для здоровья",
      id: uuidV4(),
    },
  ]);

  return (
    <Wrapper>
      <MainTitle>Магазины</MainTitle>
      {shops.map((shop) => (
        <ShopItem key={shop.id}>
          <Top className="d-flex">
            <ShopLogo>
              <img src={require(`assets/shops/${shop.logo}`)} alt="" />
            </ShopLogo>
            <Text>
              <ShopCategory>{shop.category}</ShopCategory>
              <ShopSubcategory>{shop.subcategory}</ShopSubcategory>
            </Text>
          </Top>
          <Bottom className="d-flex">
            <BigImage style={{ backgroundImage: `url(${require(`assets/shops/${shop.img_1}`)})` }}></BigImage>
            <Right>
              <div style={{ backgroundImage: `url(${require(`assets/shops/${shop.img_2}`)})` }} />
              <div style={{ backgroundImage: `url(${require(`assets/shops/${shop.img_3}`)})` }} />
              {/* <img src={require(`assets/shops/${shop.img_3}`)} alt="" /> */}
            </Right>
          </Bottom>
        </ShopItem>
      ))}
    </Wrapper>
  );
}

let Wrapper = styled.div`
  width: 257px;
`;

let ShopItem = styled.div`
  background: linear-gradient(90deg, rgba(255, 179, 89, 0.25) 0%, rgba(255, 75, 94, 0.25) 100%);
  border-radius: 15px;
  padding: 30px;
`;

let Top = styled.div`
  align-items: center;
`;

let ShopLogo = styled.div`
  padding: 20px 15px;
  background: #ffffff;
  margin-right: 10px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

let Text = styled.div``;

let ShopCategory = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 22px;
  text-align: center;
`;

let ShopSubcategory = styled.div`
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 14px;
`;

let Bottom = styled.div`
  margin-top: 10px;
  img {
    border-radius: 9px;
  }
`;

let Right = styled.div`
  div {
    width: 64px;
    height: 56px;
    border-radius: 9px;
    background-color: #fff;
  }
  div:first-child {
    margin-bottom: 2px;
  }
`;

let BigImage = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 9px;
  margin-right: 10px;
`;

export default SideShops;
