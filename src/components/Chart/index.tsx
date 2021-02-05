import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import api from '../../services/api';
import { Error } from './styles';

const Chart: React.FC = () => {
  const [chartData, setChartData] = useState<Chart.ChartData>({});
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    api
      .get('historical/close.json')
      .then(response => {
        const labels = Object.keys(response.data.bpi).slice(24, 31);
        const data: any[] = Object.values(response.data.bpi).slice(24, 31);

        setChartData({
          labels,
          datasets: [
            {
              data,
              borderColor: '#FFF',
              backgroundColor: '#242526',
            },
          ],
        });
      })
      .catch(() => setApiError(true));
  }, []);

  return (
    <>
      {!apiError ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            legend: {
              display: false,
            },
          }}
        />
      ) : (
        <Error>
          Ocorreu um erro ao carregar este campo, tente novamente mais tarde.
        </Error>
      )}
    </>
  );
};

export default Chart;
