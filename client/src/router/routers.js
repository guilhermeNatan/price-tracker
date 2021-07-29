import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import '../resources/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {Login} from '../pages/Login';
import {SignupScreen} from '../pages/Signup';
import {ForgotPasswordScreen} from '../pages/ForgotPassword';
import {ResetPasswordScreen} from '../pages/ResetPassword';
import {SearchScreen} from "../pages/Search";
import {Home} from "../pages/Home";
import {GameDetailScreen} from "../pages/GameDetail";
import {ConfirmEmailScreen} from "../pages/ConfirmEmail";
import {AnnounceScreen} from "../pages/Announce";

import {AD_FORM, AUTH, BARRA, SEARCH} from "../constants/RoutePaths";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {closseMessageAct, asyncGetUserDetails} from '../actions';
import {InternalLayout} from "../layout/internal-layout";
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {PrivateRoute} from "./PrivateRoute";

const history = createBrowserHistory();

const renderizarComLayoutPadrao = Componente => props => {
    const isMobile = useMediaQuery('(max-width:767px)');
    const isDesktop = useMediaQuery('(min-width:992px)');
    const isTablet = useMediaQuery('(min-width:768px) and  (max-width: 991px)');
    const defaultLayout =  useMediaQuery('(min-width:768px)');

    return (
        <InternalLayout>
            <Componente
                params={props.match.params}
                router={props}
                isEditar={props.match.params.operacao === 'editar'}
                isCriar={props.match.params.operacao === 'criar'}
                history={history}
                mediaQuery={{
                    isMobile:isMobile,
                    isDesktop:isDesktop,
                    isTablet:isTablet,
                    defaultLayout:defaultLayout
                }}

            />
        </InternalLayout>
    )
};


export const renderizarComLayoutLogin = Componente => (props) => {
  const elemento = (<Componente params={props.match.params} {...props} />);
  return (
    <div>
      {
          elemento
        }
    </div>
  );
};

const login = renderizarComLayoutLogin(Login);
const signupScreen = renderizarComLayoutLogin(SignupScreen);
const forgotPassword = renderizarComLayoutLogin(ForgotPasswordScreen);
const resetPassword = renderizarComLayoutLogin(ResetPasswordScreen);
const pesquisa = renderizarComLayoutPadrao(SearchScreen);
const home = renderizarComLayoutPadrao(Home);
const gameDetail = renderizarComLayoutPadrao(GameDetailScreen);
const confirmEmail = renderizarComLayoutPadrao(ConfirmEmailScreen);
const adForm = renderizarComLayoutPadrao(AnnounceScreen);

class Rotas extends Component{
    componentDidMount() {
        const {asyncGetUserDetails} = this.props;
        asyncGetUserDetails();
    }

    render() {
    const { message, closseMessageAct, user} = this.props;

    return (
        <div>
            <Switch>
                <Route exact
                       path={BARRA}
                       component={home}/>
                <Route exact
                       path={SEARCH.search}
                       component={pesquisa}/>
                <Route exact
                       path={AUTH.login}
                       component={login}/>
                <Route exact
                       path={AUTH.signup}
                       component={signupScreen}/>

                <Route exact
                       path={AUTH.forgotPassword}
                       component={forgotPassword}/>

                <Route exact
                       path={AUTH.resetPassword}
                       component={resetPassword}/>

                <PrivateRoute exact
                       user={user}
                       path={`${AUTH.confirmEmail}/:confirmEmailToken`}
                       component={confirmEmail} />


                <Route exact
                              user={user}
                              path={AD_FORM}
                              component={adForm}/>





                <Route render={() => <div>Ops : página não encontrada</div>}/>
            </Switch>
            <Snackbar open={message.showMessage} autoHideDuration={6000} onClose={closseMessageAct}>
                <MuiAlert elevation={6} variant="filled" severity={message.type}>
                    {message.text}
                </MuiAlert>
            </Snackbar>

        </div>
    );
  }
}



const mapStateToProps = state => ({ message: state.message, user: state.user });
export default connect(mapStateToProps, {asyncGetUserDetails, closseMessageAct})(Rotas);
