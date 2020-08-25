import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';

const generateProps = (index) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`,
});

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
  },
}));

export default function TabbedView() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="About Me" {...generateProps(0)} />
          <Tab label="Skills" {...generateProps(1)} />
          <Tab label="Portfolio" {...generateProps(2)} />
        </Tabs>
      </AppBar>
      <br />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <AboutMe />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Portfolio />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
