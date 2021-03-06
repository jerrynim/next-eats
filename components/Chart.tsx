import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin-left: 50px;
  width: 200px;
  min-height: 100px;
  height: fit-content;
  border: 1px solid black;
  padding: 10px;
`;

const Nmae = styled.div`
  padding: 10px 0px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bar = styled.div`
  height: 2px;
  width: 100%;
  margin: auto;
  background-color: #999;
`;
const Count = styled.p``;
const Chart: React.FC = () => {
  const chart = useSelector((state: any) => state.chart);

  return (
    <Container>
      <Nmae>장바구니</Nmae>
      <Bar />
      <FlexBox>
        <Nmae>salad</Nmae>
        <Count>{chart.saladNum}</Count>
      </FlexBox>
      <FlexBox>
        <Nmae>pizza</Nmae>
        <Count>{chart.pizzaNum}</Count>
      </FlexBox>
      <FlexBox>
        <Nmae>hamburger</Nmae>
        <Count>{chart.hamburgerNum}</Count>
      </FlexBox>
      <Bar />
      <FlexBox>
        <Nmae>총계</Nmae>
        <Count>{chart.total}</Count>
      </FlexBox>
    </Container>
  );
};
export default Chart;
