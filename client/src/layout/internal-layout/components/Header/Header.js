import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from "lodash";
import {UserMenu} from "../../../drawable-layout/components/UserMenu";
import AuthService from "../../../../service/AuthService";
import {asyncGetUserDetails, logout, showMessageAct} from "../../../../actions";
import {AD, AUTH, BARRA} from "../../../../constants/RoutePaths";
import Button from "@material-ui/core/Button";
import {Logo} from "../../../../reuse-components/Logo";

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
            <Logo
                typographyProps={{
                  onClick: () => history.push(BARRA),
                  style:{fontSize: '1.5rem'}
                }}
                containerStyles={{margin: 0}}
            />
          </div>
          <Button color="secondary"
                  variant={"contained"}
                  style={{
                    marginRight: '4vw'
                  }}
                  onClick={() => history.push(AD.addForm)}
          >
            Anunciar
          </Button>
          {
            !_.isEmpty(user) && <>

              <UserMenu logout={logout} history={history} />
            </>
          }
          {
            _.isEmpty(user) && <>
              <Button color="secondary"
                      onClick={() => history.push(AUTH.login)}
              >
                Login
              </Button>

              <Button color="secondary"
                      onClick={() => history.push(AUTH.signup)}
              >
                Cadastre-se
              </Button>

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

