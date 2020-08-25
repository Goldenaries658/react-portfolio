import React from 'react';
import Image from 'material-ui-image';
import profilePic from './images/profile-pic.webp';
import Grid from '@material-ui/core/Grid';
import BioSection from './BioSection';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-evenly',
  },
  profilePic: {
    marginTop: '12px',
    marginBottom: '12px',
  },
  bio: {
    alignSelf: 'center',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3} className={classes.profilePic}>
          <Image src={profilePic} aspectRatio={808 / 1080} />
        </Grid>
        <Grid item xs={12} md={8} className={classes.bio}>
          <BioSection />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
