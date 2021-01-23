import React from "react";
import styled from "styled-components";
import { mobileSize } from "utils";

const Slick = React.lazy(() => import("components/Slick"));

export default function HomeSlick() {
  return (
    <SlickWrapper>
      <Slick lazyLoad={false}>
        <SlickItem>
          <img src="https://via.placeholder.com/1920x360?text=Баннер 1" alt="" />
        </SlickItem>
        <SlickItem>
          <img src="https://via.placeholder.com/1920x360?text=Баннер 2" alt="" />
        </SlickItem>
      </Slick>
    </SlickWrapper>
  );
}

let SlickWrapper = styled.div`
  margin: 30px 0;

  @media (max-width: ${mobileSize}px) {
    margin: 10px 5px;
  }
`;

let SlickItem = styled.div`
  text-align: center;
  div,
  img {
    margin: 0 auto;
  }
`;
