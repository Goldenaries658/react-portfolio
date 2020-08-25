import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '12px',
    paddingBottom: '12px',
    backgroundColor: '#42424290',
    backdropFilter: 'blur(3px) brightness(200%)',
  },
}));

export default function TabPanel({ children, value, index, ...other }) {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container className={classes.root} component={Paper}>
          {children}
        </Container>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
