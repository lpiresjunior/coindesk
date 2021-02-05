import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import api from '../../services/api';

const Chart: React.FC = () => {
  const [chartData, setChartData] = useState<Chart.ChartData>({});

  useEffect(() => {
    api.get('historical/close.json').then(response => {
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
    });
  }, []);

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        legend: {
          display: false,
        },
      }}
    />
  );
};

export default Chart;
