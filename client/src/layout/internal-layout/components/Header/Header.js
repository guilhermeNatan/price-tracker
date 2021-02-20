import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {LoginForm} from "../../../../reuse-components/LoginForm";
import {FormDialog} from "../../../../reuse-components/FormDialog";
import SignUpFormFieldsSpecifications, {signupRequest} from "../../../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";
import {SignUpFormFields} from "../../../../reuse-components/SignUpFormFields";
import LoginFormFieldsSpecifications
  , {loginRequest} from "../../../../reuse-components/LoginForm/LoginFormFieldsSpecifications";


class Header extends Component {
  render() {
    const { classes } = this.props;
    return (

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{flexGrow: 1}} color="inherit" component="p" noWrap>
            { 'Bem vindo ao Jogo Justo'}
          </Typography>

          <FormDialog
              mainButtonName={"Login"}
              title={"Login"}
              formikOptions={LoginFormFieldsSpecifications(loginRequest())}
              renderContent={(formik) => <LoginForm formik={formik}/>}
          />

          <FormDialog
              mainButtonName={"Cadastre-se"}
              title={"Cadastre-se"}
              formikOptions={SignUpFormFieldsSpecifications(signupRequest())}
              renderContent={(formik) => <SignUpFormFields formik={formik}/>}
          />
        </Toolbar>
      </AppBar>
    );
  }
}


const mapStateToProps = state => ({ parametros: state.parametros });
const router = withRouter(Header);
export default connect(mapStateToProps, null)(router);
