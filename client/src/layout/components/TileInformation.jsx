import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  title: {
    marginBottom: 10,
  },
  divider: {
    margin: 20,
    height: 2,
    backgroundColor: 'white',
  },
  colorPrimary: {
    color: 'white',
  },
});

function TileInformation(props) {
  const {
    classes, titleHeader, information, color,
  } = props;

  return (
    <div>
      <Paper className={classes.root} style={{ backgroundColor: color }} elevation={0}>
        <Typography variant="h5" component="h3" align="center" className={classes.colorPrimary}>
          {
                            titleHeader
                        }
        </Typography>

        <Divider variant="middle" className={classes.divider} />


        <Typography variant="h2" component="h1" color="primary" align="center" className={classes.colorPrimary}>
          {
                            information
                        }
        </Typography>
      </Paper>
    </div>
  );
}

TileInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TileInformation);
