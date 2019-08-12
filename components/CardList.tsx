import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "../store/chart";
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
const Image = styled.div<{ src: string }>`
  width: 200px;
  height: 120px;
  background-size: cover;
  background-image: url(${(props) => props.src});
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
  const menus = useSelector((state: any) => state.chartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "chart/TRIGGER_GET_MENU" });
  }, []);
  return (
    <Container>
      {menus.length > 0 &&
        menus.map((menu: Menu, index: number) => (
          <Card key={index}>
            <Image src={menu.image} />
            <Name>{menu.name}</Name>
            <Price>₩{menu.price}</Price>
            <CountBox>
              <Count>0</Count>
              <Buttons>
                <button>+</button>
                <button>-</button>
              </Buttons>
            </CountBox>
          </Card>
        ))}
    </Container>
  );
};
export default CardList;
