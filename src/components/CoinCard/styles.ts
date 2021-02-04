import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 20px 10px;
  background-color: #242526;
  border-radius: 5px;

  & + div {
    margin-top: 10px;
  }

  p {
    font-size: 28px;
    color: #a8a8b3;

    & + p {
      color: #fff;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;
