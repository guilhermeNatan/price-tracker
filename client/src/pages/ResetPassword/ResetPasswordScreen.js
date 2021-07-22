import React from 'react';
import styles from './ResetPasswordStyles';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {asyncGetUserDetails, logout, showMessageAct} from "../../actions";
import Card from '@material-ui/core/es/Card';
import CardHeader from '@material-ui/core/es/CardHeader';
import CardContent from '@material-ui/core/es/CardContent';
import Button from "@material-ui/core/Button";
import {BARRA, LOGIN} from "../../constants/RoutePaths";
import AuthService from "../../service/AuthService";
import {useFormik} from "formik";
import {ResetPasswordForm} from "../../reuse-components/ResetPasswordForm";
import ResetPasswordFormFieldsSpecifications
  from "../../reuse-components/ResetPasswordForm/ResetPasswordFormFieldsSpecifications";


function  ResetPasswordScreen (props) {
  const [errorMessage, setErrorMessage] = React.useState();
  const [success, setSuccess] = React.useState();

  const resetPassword = (values) => {
    const getUserDetailsAfterLogin = () => asyncGetUserDetails(() => props.history.push(BARRA));
    AuthService.resetPassword({...values, token: props.match.params.token}, (resp) =>  {
      console.log(resp.data.message)
      setSuccess(resp.data.message);
    }, (error) => {
      setErrorMessage(error.response && error.response.data  ? error.response.data.mensagem: '')
    })
  }

  const formik = useFormik({
    ...ResetPasswordFormFieldsSpecifications,
    onSubmit: resetPassword
  })
  console.log('successo', success)
    return (
      <div style={styles.container}>
        <Card style={styles.card}>
          <CardHeader
              title="Troca e vendas Capelinha"
          />
          <CardContent>
            <form onSubmit={ formik.handleSubmit}>
              <ResetPasswordForm
                  formik={formik}
              />
              <Button  type="submit"
                       color="primary"
                       variant="contained"
                       style={{marginTop: '3vh'}}
                       autoFocus>
                Confirmar
              </Button>
            </form>

            <div style={{color: 'red'}}> {errorMessage}</div>

            {
             success  &&
              <>
                <div>{success}</div>
                <Button type="submit"
                        color="primary"
                        onClick={()=>props.history.push(LOGIN)}
                        variant="contained"
                        style={{marginTop: '3vh'}}
                        autoFocus>
                  Acessar sistema
                </Button>
              </>
            }
          </CardContent>
        </Card>
      </div>
    );
  }



const mapStateToProps = state => ({ parametros: state.parametros, user: state.user });
const router = withRouter(ResetPasswordScreen);
export default connect(mapStateToProps, {asyncGetUserDetails, showMessageAct, logout})(router);

