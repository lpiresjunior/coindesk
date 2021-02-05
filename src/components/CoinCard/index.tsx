import React, { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import api from '../../services/api';

import { Card, Error } from './styles';

interface Coin {
  code: string;
  symbol: string;
  rate_float: number;
}

const CoinCard: React.FC = () => {
  const [apiError, setApiError] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const handleRateFormat = (value: number) => {
    return value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    api
      .get('currentprice.json')
      .then(response => {
        setCoins(Object.values(response.data.bpi));
      })
      .catch(() => {
        setApiError(true);
      });
  }, []);

  return (
    <>
      {!apiError ? (
        coins.map(coin => (
          <Card key={coin.rate_float}>
            <>
              <p>{coin.code}</p>
              <p>
                {`${decode(coin.symbol)} ${handleRateFormat(coin.rate_float)}`}
              </p>
            </>
          </Card>
        ))
      ) : (
        <Error>
          Ocorreu um erro ao carregar este campo, tente novamente mais tarde.
        </Error>
      )}
    </>
  );
};

export default CoinCard;
