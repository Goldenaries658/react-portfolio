import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  skills: {
    justifyContent: 'space-around',
  },
  title: {
    paddingLeft: '16px',
  },
}));

const skills = {
  known: [
    'MERN Stack (MongoDB, Express, React, Node)',
    'HTML',
    'CSS & Frameworks',
    'JavaScript/jQuery (es6)',
    'Agile Project Management',
    'User Authentication (Custom & OAuth)',
    'mySQL',
    'Progressive Web Applications',
  ],
  learning: ['Headless Architecture', 'Improving React skills', 'Redux'],
};

export default function Skills() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h3">Skills.</Typography>
      <hr />
      <br />
      <Grid container className={classes.skills}>
        <Grid item xs={12} md={4}>
          <Typography color="secondary" variant="h5" className={classes.title}>
            I Know About
          </Typography>
          <List>
            {skills.known.map((skill, index) => (
              <React.Fragment>
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <br />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography color="secondary" variant="h5" className={classes.title}>
            I'm Working on
          </Typography>
          <List>
            {skills.learning.map((skill, index) => (
              <React.Fragment>
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
