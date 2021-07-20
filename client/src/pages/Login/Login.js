import React from 'react';
import Card from '@material-ui/core/es/Card';
import CardHeader from '@material-ui/core/es/CardHeader';
import CardContent from '@material-ui/core/es/CardContent';
import styles from './LoginStyle'
import {LoginForm} from "../../reuse-components/LoginForm";
import {useFormik} from "formik";
import LoginFormFieldsSpecifications
  from "../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import Button from "@material-ui/core/Button";
import AuthService from "../../service/AuthService";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {asyncGetUserDetails, logout, showMessageAct} from "../../actions";
import {BARRA} from "../../constants/RoutePaths";


function Login({asyncGetUserDetails, history}) {
  const [loginErrorMessage, setLoginErrorMessage] = React.useState(false);


  const makeLogin = (values) => {
    const getUserDetailsAfterLogin = () => asyncGetUserDetails(() => history.push(BARRA));
    AuthService.signin(values, getUserDetailsAfterLogin, (error) => setLoginErrorMessage(error.response.data.mensagem))
  }

  const formik = useFormik({
    ...LoginFormFieldsSpecifications,
    onSubmit: makeLogin
  })
  return (
      <div style={styles.container}>
        <Card style={styles.card}>
          <CardHeader
              title="Troca e vendas Capelinha"
          />
          <CardContent>
            <form onSubmit={ formik.handleSubmit}>
              <LoginForm
                  formik={formik}
              />
              <Button  type="submit"
                       color="primary"
                       variant="contained"
                       style={{marginTop: '3vh'}}
                       autoFocus>
                Entrar
              </Button>
            </form>

            <div style={{color: 'red'}}> {loginErrorMessage}</div>


            <Button
                     color="secondary"
                     style={{marginTop: '3vh'}}
                     autoFocus>
              Esqueceu sua senha?
            </Button>
          </CardContent>
        </Card>
      </div>
  )
}

// export default Login;

const mapStateToProps = state => ({ parametros: state.parametros, user: state.user });
const router = withRouter(Login);
export default connect(mapStateToProps, {asyncGetUserDetails, showMessageAct, logout})(router);

