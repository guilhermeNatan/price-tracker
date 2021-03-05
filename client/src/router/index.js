import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import '../resources/css/style.css';
import reducers from '../reducers';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from '@material-ui/core';
import theme from '../theme';
import Rotas from "./routers";


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

class RouterContainer extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <BrowserRouter>
                        <Rotas {...this.props}/>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        );
    }
}


export default RouterContainer;

