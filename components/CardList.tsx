import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
  .div {
  }
`;

const Card = styled.div`
  margin-bottom: 10px;
`;
const Image = styled.div`
  width: 200px;
  height: 120px;
  background-size: cover;
  background-image: url("https://www.medicalnewstoday.com/content//images/articles/324/324956/close-up-of-a-plate-of-food.jpg");
`;
const Name = styled.h4`
  margin: 10px 0px;
`;
const Count = styled.span`
  color: #999;
`;
const CountBox = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div``;
const Price = styled.span``;
const CardList: React.FC = () => {
  return (
    <Container>
      <Card>
        <Image />
        <Name>Hamburger</Name>
        <Price>₩6000</Price>

        <CountBox>
          <Count>0</Count>
          <Buttons>
            <button>+</button>
            <button>-</button>
          </Buttons>
        </CountBox>
      </Card>
      <Card>
        <Image />
        <Name>pizza</Name>
        <Price>₩8000</Price>
        <CountBox>
          <Count>0</Count>
          <Buttons>
            <button>+</button>
            <button>-</button>
          </Buttons>
        </CountBox>
      </Card>
      <Card>
        <Image />
        <Name>salad</Name>
        <Price>₩7000</Price>
        <CountBox>
          <Count>0</Count>
          <Buttons>
            <button>+</button>
            <button>-</button>
          </Buttons>
        </CountBox>
      </Card>
    </Container>
  );
};
export default CardList;
