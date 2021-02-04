import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import { Container, Title, Card } from './styles';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        '2021-01-28',
        '2021-01-29',
        '2021-01-30',
        '2021-01-31',
        '2021-02-01',
        '2021-02-02',
        '2021-02-03',
      ],
      datasets: [
        {
          data: [
            33420.045,
            34264.01,
            34324.2717,
            33129.7433,
            33543.77,
            35528.31,
            37685.2767,
          ],
          borderColor: '#FFF',
          backgroundColor: '#242526',
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Principais moedas</Title>
        <Card>
          <p>USD</p>
          <p>$ 23.000,00</p>
        </Card>
        <Card>
          <p>USD</p>
          <p>$ 23.000,00</p>
        </Card>
        <Card>
          <p>USD</p>
          <p>$ 23.000,00</p>
        </Card>
      </Container>
      <Container>
        <Title>Últimos 7 dias em USD</Title>
        <Line
          data={chartData}
          options={{
            responsive: true,
            legend: {
              display: false,
            },
          }}
        />
      </Container>
    </>
  );
};

export default Home;
