import React from 'react';
import Image from 'material-ui-image';
import profilePicWebp from './images/profile-pic.webp';
import profilePicJpeg from './images/profile-pic.jpg';
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
          <picture>
            <source srcset={profilePicWebp} type="image/webp" />
            <source srcset={profilePicJpeg} type="image/jpeg" />
            <Image
              src={profilePicJpeg}
              alt="Profile Pic"
              aspectRatio={808 / 1080}
            />
          </picture>
        </Grid>
        <Grid item xs={12} md={8} className={classes.bio}>
          <BioSection />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
