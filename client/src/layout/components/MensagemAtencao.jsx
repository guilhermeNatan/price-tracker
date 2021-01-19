import React from 'react';
import Paper from '@material-ui/core/es/Paper';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/es/Typography/Typography';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#ff162c',
    marginBottom: 10,
  },
  colorPrimary: {
    color: 'white',
  },
});

const MensagemAtencao = ({ classes, texto }) => (
  <Paper className={classes.root}>
    <Typography variant="h6" component="h6" className={classes.colorPrimary}>
      {
              texto
      }
    </Typography>
  </Paper>
);

export default withStyles(styles)(MensagemAtencao);
