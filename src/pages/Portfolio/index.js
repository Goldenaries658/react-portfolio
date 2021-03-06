import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
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
    marginTop: '12px',
    width: 1100,
    height: '80vh',
  },
  gridImg: {
    height: '100%',
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
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={400}
          spacing={7}
          cols={getGridListCols()}
        >
          {tileData.map(({ id, img, title, description, href }) => (
            <GridListTile key={id}>
              <picture>
                <source srcset={img.webp} type="image/webp" />
                <source srcset={img.jpeg} type="image/jpeg" />
                <img className={classes.gridImg} src={img.jpeg} alt={title} />
              </picture>
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
