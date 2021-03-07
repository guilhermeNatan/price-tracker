import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import '../resources/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {Login} from '../pages/Login';
import {SearchScreen} from "../pages/Search";
import {GameDetailScreen} from "../pages/GameDetail";
import {ConfirmEmailScreen} from "../pages/ConfirmEmail";
import {AUTH, GAME_DETAIL, SEARCH} from "../constants/RoutePaths";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {closseMessageAct} from '../actions';
import {InternalLayout} from "../layout/internal-layout";
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
const pesquisa = renderizarComLayoutPadrao(SearchScreen);
const gameDetail = renderizarComLayoutPadrao(GameDetailScreen);
const confirmEmail = renderizarComLayoutPadrao(ConfirmEmailScreen);

class Rotas extends Component{

  render() {
    const { message, closseMessageAct} = this.props;
    return (
        <div>
            <Switch>
                <Route exact path="/" component={pesquisa}/>
                <Route exact path={`${GAME_DETAIL}/:idgame`} component={gameDetail}/>
                <Route exact path={SEARCH} component={login}/>
                <Route exact path={`${AUTH.confirmEmail}/:confirmEmailToken`}
                       component={confirmEmail}/>

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


const mapStateToProps = state => ({ message: state.message });
export default connect(mapStateToProps, {closseMessageAct})(Rotas);
