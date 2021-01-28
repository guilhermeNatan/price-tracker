import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import '../resources/css/style.css';
import {createBrowserHistory} from 'history';
import {ToastContainer} from 'react-toastify';
import Layout from '../layout/Layout';
import reducers from '../reducers';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../layout/pages/Login/Login';
import Home from "../layout/pages/Home/Home";

const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderizarComLayoutPadrao = Componente => props => (
  <Layout>
    <Componente
      params={props.match.params}
      router={props}
      isEditar={props.match.params.operacao === 'editar'}
      isCriar={props.match.params.operacao === 'criar'}
      history={history}
    />
  </Layout>
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
const home = renderizarComLayoutPadrao(Home);

class Rotas extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />

              <Route render={() => <div>Ops : página não encontrada</div>} />
            </Switch>
            <ToastContainer />
          </div>
        </BrowserRouter>

      </Provider>
    );
  }


}


export default Rotas;
