import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { ComponentHeader } from './styles';

const Header: React.FC = () => {
  const [coin, setCoin] = useState<number>();

  const handleFormatValue = (value: number) => {
    return value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    api.get('currentprice/BRL.json').then(response => {
      setCoin(response.data.bpi.BRL.rate_float);
    });
  }, []);

  return (
    <ComponentHeader>
      <Link to="/">Bitcoin</Link>
      {coin && <Link to="/sobre">{`BRL ${handleFormatValue(coin)}`}</Link>}
      {/* <Link to="/sobre">Sobre</Link> */}
    </ComponentHeader>
  );
};

export default Header;
