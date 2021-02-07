import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {ToastContainer} from 'react-toastify';
import { InternalLayout } from '../layout/internal-layout';
import '../resources/css/style.css';
import reducers from '../reducers';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from '../pages/Login';
import {SearchScreen} from "../pages/Search";
import {GameDetailScreen} from "../pages/GameDetail";
import { ConfirmEmailScreen } from "../pages/ConfirmEmail";
import {GAME_DETAIL, SEARCH, AUTH} from "../constants/RoutePaths";
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';



const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const renderizarComLayoutPadrao = Componente => props => (
  <InternalLayout>
    <Componente
      params={props.match.params}
      router={props}
      isEditar={props.match.params.operacao === 'editar'}
      isCriar={props.match.params.operacao === 'criar'}
      history={history}
    />
  </InternalLayout>
);

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

class Rotas extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={createStoreWithMiddleware(reducers)}>
              <BrowserRouter>
                <div>
                  <Switch>
                      <Route exact path="/" component={pesquisa}/>
                      <Route exact path={`${GAME_DETAIL}/:idgame`} component={gameDetail}/>
                      <Route exact path={SEARCH} component={login}/>
                      <Route exact path={`${AUTH.confirmEmail}/:confirmEmailToken`} component={confirmEmail}/>

                    <Route render={() => <div>Ops : página não encontrada</div>} />
                  </Switch>
                  <ToastContainer />
                </div>
              </BrowserRouter>

            </Provider>
        </ThemeProvider>
    );
  }
}


export default Rotas;

