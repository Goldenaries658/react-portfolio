import React from 'react';
import './app.css';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import purple from '@material-ui/core/colors/purple';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
  },
});

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '12px',
    paddingBottom: '12px',
    backgroundColor: '#42424290',
    backdropFilter: 'blur(3px) brightness(200%)',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <br />
        <Container className={classes.root} component={Paper}>
          <AboutMe />
        </Container>
      </ThemeProvider>
    </div>
  );
}
