import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from "lodash";
import {UserMenu} from "../../../drawable-layout/components/UserMenu";
import {FormDialog} from "../../../../reuse-components/FormDialog";
import LoginFormFieldsSpecifications
  from "../../../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import {LoginForm} from "../../../../reuse-components/LoginForm";
import AuthService from "../../../../service/AuthService";
import {asyncGetUserDetails, showMessageAct} from "../../../../actions";
import SignUpFormFieldsSpecifications
  from "../../../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";
import {SignUpFormFields} from "../../../../reuse-components/SignUpFormFields";

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loginErrorMessage: null,
      signupErrorMessage: null

    }
  }

  setLoginErrorMessage = (loginErrorMessage) => this.setState({loginErrorMessage});
  setSignupErrorMessage = (signupErrorMessage) => this.setState({signupErrorMessage});
  render() {

    const makeLogin = (values, closeDialog) => {
      const getUserDetailsAfterLogin = () => asyncGetUserDetails(closeDialog);
      AuthService.signin(values, getUserDetailsAfterLogin, (error) => this.setLoginErrorMessage(error.response.data.mensagem))
    }
    const makeSignup = (values, closeDialog) => {
      AuthService.signup(values, ()=> console.log('confirme o e-mail'), (error) => this.setSignupErrorMessage(error.response.data.mensagem))
    }

    const { classes, user } = this.props;
    const { loginErrorMessage, signupErrorMessage } = this.state;
    return (

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <Typography variant="h4" style={{flexGrow: 1}} color="inherit" component="p" noWrap >
            { 'Troca e Vendas Capelinha'}
          </Typography>

          {
            !_.isEmpty(user) && <UserMenu/>
          }
          {
            _.isEmpty(user) && <>
              <FormDialog
                  mainButtonName={"Login"}
                  title={"Login"}
                  confirmButtonName={'Entrar'}
                  formikOptions={{
                    ...LoginFormFieldsSpecifications,
                    onSubmit: makeLogin
                  }}
                  errorMessage={loginErrorMessage}
                  renderContent={(formik) => <LoginForm formik={formik}/>}
              />

              <FormDialog
                  mainButtonName={"Cadastre-se"}
                  title={"Cadastre-se"}
                  confirmButtonName={'Confirmar'}
                  errorMessage={signupErrorMessage}
                  formikOptions={{
                    ...SignUpFormFieldsSpecifications,
                    onSubmit: makeSignup
                  }}
                  renderContent={(formik) => <SignUpFormFields formik={formik}/>}
              />
            </>
          }
        </Toolbar>
      </AppBar>
    );
  }
}


const mapStateToProps = state => ({ parametros: state.parametros, user: state.user });
const router = withRouter(Header);
export default connect(mapStateToProps, {asyncGetUserDetails})(router);

