import React from 'react';
import Card from '@material-ui/core/es/Card';
import CardContent from '@material-ui/core/es/CardContent';
import styles from './LoginStyle'
import {LoginForm} from "../../reuse-components/LoginForm";
import LoginFormFieldsSpecifications
    from "../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import AuthService from "../../service/AuthService";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {asyncGetUserDetails} from "../../actions";
import {AUTH, BARRA} from "../../constants/RoutePaths";
import {GenericForm} from "../../reuse-components/GenericForm";
import {Logo} from "../../reuse-components/Logo";

function Login({asyncGetUserDetails, history}) {

  return (
      <div style={styles.container}>
         <Logo />
        <Card style={styles.card}>
          <CardContent>
            <GenericForm
                renderForm={(formik) => (<LoginForm formik={formik}/>)}
                FormFieldsSpecifications={LoginFormFieldsSpecifications}
                onSubmit={AuthService.signin}
                onSuccess={() => asyncGetUserDetails(() => history.push(BARRA))}
                actions={[{
                    onClick:()=>history.push(AUTH.forgotPassword),
                    name: 'Esqueceu sua senha?'
                }]}
            />


          </CardContent>
        </Card>
      </div>
  )
}

const mapStateToProps = state => ({ applicationParams: state.applicationParams });
const router = withRouter(Login);
export default connect(mapStateToProps, {asyncGetUserDetails})(router);

