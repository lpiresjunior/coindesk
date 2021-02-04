import React, { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import api from '../../services/api';

import { Card } from './styles';

interface Coin {
  code: string;
  symbol: string;
  rate_float: number;
}

const CoinCard: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const handleFormatValue = (value: number) => {
    return value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    api.get('currentprice.json').then(response => {
      setCoins(Object.values(response.data.bpi));
    });
  }, []);

  return (
    <>
      {coins.map(coin => (
        <Card>
          <>
            <p>{coin.code}</p>
            <p>
              {`${decode(coin.symbol)} ${handleFormatValue(coin.rate_float)}`}
            </p>
          </>
        </Card>
      ))}
    </>
  );
};

export default CoinCard;
