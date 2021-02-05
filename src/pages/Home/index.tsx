import React from 'react';

import { Container, Title } from './styles';
import Header from '../../components/Header';
import CoinCard from '../../components/CoinCard';
import Chart from '../../components/Chart';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Principais moedas</Title>
        <CoinCard />
      </Container>
      <Container>
        <Title>Últimos 7 dias em USD</Title>
        <Chart />
      </Container>
    </>
  );
};

export default Home;
