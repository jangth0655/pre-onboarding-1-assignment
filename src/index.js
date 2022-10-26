import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import variables from './styles/variable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <ThemeProvider theme={{ style: variables }}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </RecoilRoot>
);
