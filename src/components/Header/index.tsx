import React from 'react';
import { Link } from 'react-router-dom';

import { Headerr } from './styles';

const Header: React.FC = () => {
  return (
    <Headerr>
      <Link to="/">Bitcoin</Link>
      <Link to="/">BRL 130.000,00</Link>
      {/* <Link to="/sobre">Sobre</Link> */}
    </Headerr>
  );
};

export default Header;
