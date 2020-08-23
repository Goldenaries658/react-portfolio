import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  span: {
    fontWeight: 'bold',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '30px',
  },
  iconButton: {
    fontSize: theme.typography.h3.fontSize,
  },
}));

export default function BioSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4">Jacob Houston.</Typography>
      <br />
      <Typography paragraph={true}>
        I am an aspiring web developer currently enrolled in the University of
        Birmingham Coding Boot Camp powered by Trilogy Education Services LLC.
        learning
        <Typography component="span" color="secondary" className={classes.span}>
          {' Full Stack Web Development '}
        </Typography>
        and soon to be making my entry into the job market.
      </Typography>
      <div className={classes.socialIcons}>
        <Tooltip title="Send me an email!">
          <IconButton
            className={classes.iconButton}
            aria-label="Email"
            color="secondary"
            href="mailto:jacob.houston658@gmail.com"
          >
            <MailIcon titleAccess="Email" fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton
            className={classes.iconButton}
            aria-label="GitHub"
            color="secondary"
            href="https://github.com/Goldenaries658/"
          >
            <GitHubIcon titleAccess="GitHub" fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            className={classes.iconButton}
            aria-label="LinkedIn"
            color="secondary"
            href="https://www.linkedin.com/in/jacob-houston-b8aa08123/"
          >
            <LinkedInIcon titleAccess="LinkedIn" fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </div>
    </React.Fragment>
  );
}
