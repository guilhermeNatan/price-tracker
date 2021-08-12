import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import {Header} from './components/Header';
import styles from "./InternalLayoutStyle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class InternalLayout extends React.Component {
  render() {
    const {
      classes, theme, children, history,
    } = this.props;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} theme={theme} />
        {/*<Menu classes={classes} theme={theme} history={history} />*/}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
          <footer className={classes.footer}>

                  <div className={classes.linksContainer}>

                      <Typography variant={"body2"} component={'a'}
                                  className={classes.link}>
                          Como anunciar
                      </Typography>

                  </div>

                  <Divider
                      className={classes.divider}/>

                  <Typography variant={"body2"} component={'p'} className={classes.address}>
                      Troca e Vendas Capelinha LTDA, Rua XXXXXX, 359, Bairro Piedade - 22220-021 -
                      Capelinha
                  </Typography>
          </footer>
      </div>
    );
  }
}

InternalLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(InternalLayout);
