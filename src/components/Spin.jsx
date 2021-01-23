import React from "react";
import { Spin as Loading } from "antd";
import styled from "styled-components";

function Spin() {
  return (
    <Container>
      <Loading size="large" />
    </Container>
  );
}

export default Spin;

let Container = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
