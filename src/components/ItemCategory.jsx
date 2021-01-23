import React from "react";
import styled from "styled-components";

function ItemCategory({ category, ...rest }) {
  return (
    <Item key={category.id} {...rest}>
      <Title>{category.name}</Title>
      <img src={require(`assets/categories/${category.img}`)} alt="" />
    </Item>
  );
}

export default ItemCategory;

let Item = styled.div`
  background: linear-gradient(
    154.26deg,
    rgba(254, 202, 92, 0.3) 0%,
    rgba(202, 51, 95, 0.3) 48%,
    rgba(79, 49, 140, 0.3) 100%
  );
  flex: 1 0 calc(25% - 23px);
  max-width: calc(25% - 22px);
  margin: 0 30px 25px 0;
  padding: 70px 20px 0;
  border-radius: 15px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

let Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 30px;
  text-align: center;
  margin-bottom: 70px;
`;
