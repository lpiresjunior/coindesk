import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  background: #F2F2FA;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}
#root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #18191A;
}
button {
  cursor: pointer;
}
`;
