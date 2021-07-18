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
import {asyncGetUserDetails, showMessageAct, logout} from "../../../../actions";
import SignUpFormFieldsSpecifications
  from "../../../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";
import {SignUpFormFields} from "../../../../reuse-components/SignUpFormFields";
import {BARRA} from "../../../../constants/RoutePaths";

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

  componentDidMount() {
    const {asyncGetUserDetails} = this.props;
    asyncGetUserDetails();
  }

  render() {

    const makeLogin = (values, closeDialog) => {
      const {asyncGetUserDetails} = this.props;
      const getUserDetailsAfterLogin = () => asyncGetUserDetails(closeDialog);
      AuthService.signin(values, getUserDetailsAfterLogin, (error) => this.setLoginErrorMessage(error.response.data.mensagem))
    }
    const makeSignup = (values, closeDialog) => {
      const {showMessageAct, asyncGetUserDetails} = this.props;
      const getUserDetailsAfterLogin = () => asyncGetUserDetails(closeDialog);
      AuthService.signup(values, getUserDetailsAfterLogin, (error) => this.setSignupErrorMessage(error.response.data.mensagem))
    }

    const { classes, user, history, logout } = this.props;
    const { loginErrorMessage, signupErrorMessage  } = this.state;

    return (

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>


          <div style={{
            display: "flex",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flex: 1
          }}>
            <button style={{
              border: "none", background: "none",
              color: "inherit",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",

            }}>
              <Typography variant="h4"
                          onClick={() => history.push(BARRA)}
                          color="inherit"
                          noWrap>
                {'Troca e Vendas Capelinha'}
              </Typography>
            </button>
          </div>

          {
            !_.isEmpty(user) && <UserMenu logout={logout} history={history} />
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
export default connect(mapStateToProps, {asyncGetUserDetails, showMessageAct, logout})(router);

