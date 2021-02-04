import styled from 'styled-components';

export const Headerr = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 40px; */

  a {
    display: flex;
    /* align-items: center; */
    text-decoration: none;
    font-size: 24px;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: #a8a8b3;
    }
  }
`;
