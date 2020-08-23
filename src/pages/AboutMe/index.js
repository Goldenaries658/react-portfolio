import React from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import profilePic from './images/profile-pic.webp';
import Grid from '@material-ui/core/Grid';
import BioSection from './BioSection';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  bio: {
    alignSelf: 'center',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h3">About Me.</Typography>
      <hr />
      <br />
      <Grid container spacing={5}>
        <Grid item xs={12} md={3}>
          <Image src={profilePic} aspectRatio={808 / 1080} />
        </Grid>
        <Grid item xs={12} md={9} className={classes.bio}>
          <BioSection />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
