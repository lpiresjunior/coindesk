import React from 'react';
import { Link } from 'react-router-dom';

import { ComponentHeader } from './styles';

const Header: React.FC = () => {
  return (
    <ComponentHeader>
      <Link to="/">Bitcoin</Link>
      <Link to="/sobre">BRL 130.000,00</Link>
      {/* <Link to="/sobre">Sobre</Link> */}
    </ComponentHeader>
  );
};

export default Header;
