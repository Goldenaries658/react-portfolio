import React from 'react';
import './app.css';
import Header from './components/Header';
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  Container,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[500],
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <br />
        {/* <Container>
          
        </Container> */}
      </ThemeProvider>
    </div>
  );
}
