import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { TriggerGetMenu } from "../store/menu";
import {
  Chart,
  IncreaseHNum,
  IncreasePNum,
  IncreaseSNum
} from "../store/chart";
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

  const chart: Chart = useSelector((state: any) => state.chart);

  useEffect(() => {
    dispatch<TriggerGetMenu>({ type: "menu/TRIGGER_GET_MENU" });
  }, []);

  return (
    <Container>
      {menus.length > 0 && (
        <>
          <Card>
            <Image src={menus[0].image} />
            <Name>{menus[0].name}</Name>
            <Price>₩{menus[0].price}</Price>
            <CountBox>
              <Count>{chart.hamburgerNum}</Count>
              <Buttons>
                <button
                  onClick={() =>
                    dispatch<IncreaseHNum>({ type: "chart/INCREASE_H_NUM" })
                  }
                >
                  +
                </button>
                <button>-</button>
              </Buttons>
            </CountBox>
          </Card>
          <Card>
            <Image src={menus[1].image} />
            <Name>{menus[1].name}</Name>
            <Price>₩{menus[1].price}</Price>
            <CountBox>
              <Count>{chart.pizzaNum}</Count>
              <Buttons>
                <button
                  onClick={() =>
                    dispatch<IncreasePNum>({ type: "chart/INCREASE_P_NUM" })
                  }
                >
                  +
                </button>
                <button>-</button>
              </Buttons>
            </CountBox>
          </Card>
          <Card>
            <Image src={menus[2].image} />
            <Name>{menus[2].name}</Name>
            <Price>₩{menus[2].price}</Price>
            <CountBox>
              <Count>{chart.saladNum}</Count>
              <Buttons>
                <button
                  onClick={() =>
                    dispatch<IncreaseSNum>({ type: "chart/INCREASE_S_NUM" })
                  }
                >
                  +
                </button>
                <button>-</button>
              </Buttons>
            </CountBox>
          </Card>
        </>
      )}
    </Container>
  );
};
export default CardList;
