import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { tileData } from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 1100,
    height: 820,
  },
  icon: {
    // color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default withWidth()(function Portfolio({ width }) {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp('md', width)) {
      return 2;
    }

    return 1;
  };

  return (
    <React.Fragment>
      <Typography variant="h3">Portfolio.</Typography>
      <hr />
      <br />
      <div className={classes.root}>
        <GridList
          cellHeight={400}
          spacing={7}
          cols={getGridListCols()}
          className={classes.gridList}
        >
          {tileData.map(({ img, title, description, href }) => (
            <GridListTile key={img}>
              <img src={img} alt={title} />
              <GridListTileBar
                title={title}
                subtitle={<span>{description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${title}`}
                    className={classes.icon}
                    href={href}
                    color="secondary"
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
});
