import React from 'react';
import './App.css';
import Header from './components/Header';
import purple from '@material-ui/core/colors/purple';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TabbedView from './components/TabbedView';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: purple
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
