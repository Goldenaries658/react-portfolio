import React from 'react';
import './App.css';
import Header from './components/Header';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TabbedView from './components/TabbedView';

const themeRandomiser = () => {
  const randomNum = Math.floor(Math.random() * 10);
  if (randomNum < 2) return cyan;
  if (randomNum < 4) return purple;
  if (randomNum < 6) return green;
  if (randomNum < 8) return red;
  return orange;
};

const randColour = themeRandomiser();

document
  .querySelector('#theme-color')
  .setAttribute('content', randColour[500]);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: randColour,
    secondary: randColour,
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <TabbedView />
      </ThemeProvider>
    </div>
  );
}
