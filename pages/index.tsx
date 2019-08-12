import { NextPage } from "next";

import styled from "styled-components";
import CardList from "../components/CardList";
import Chart from "../components/Chart";
const Container = styled.div`
  width: fit-content;
  display: flex;
`;
const App: NextPage = () => {
  return (
    <Container>
      <CardList />
      <Chart />
    </Container>
  );
};

export default App;
