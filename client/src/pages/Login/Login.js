import React from 'react';
import Card from '@material-ui/core/es/Card';
import CardContent from '@material-ui/core/es/CardContent';
import styles from './LoginStyle'
import {LoginForm} from "../../reuse-components/LoginForm";
import LoginFormFieldsSpecifications
    from "../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import Button from "@material-ui/core/Button";
import AuthService from "../../service/AuthService";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {asyncGetUserDetails} from "../../actions";
import {AUTH, BARRA} from "../../constants/RoutePaths";
import {GenericForm} from "../../reuse-components/GenericForm";
import Typography from "@material-ui/core/Typography";
import colors from "../../theme/colors";

function Login({asyncGetUserDetails, history}) {

  return (
      <div style={styles.container}>
          <Typography variant="h1"  style={{fontSize: 50, color: colors.secondaryTextColor, marginBottom: '5vh' }}>
              Shopping do Vale
          </Typography>
        <Card style={styles.card}>
          <CardContent>

            <GenericForm
                renderForm={(formik) => (<LoginForm formik={formik}/>)}
                FormFieldsSpecifications={LoginFormFieldsSpecifications}
                onSubmit={AuthService.signin}
                onSuccess={() => asyncGetUserDetails(() => history.push(BARRA))}
            />

            {
              <Button

                  onClick={()=>history.push(AUTH.forgotPassword)}
                  color="secondary"
                  style={{marginTop: '3vh'}}
                  autoFocus>
                Esqueceu sua senha?
              </Button>
            }

          </CardContent>
        </Card>
      </div>
  )
}

const mapStateToProps = state => ({ applicationParams: state.applicationParams });
const router = withRouter(Login);
export default connect(mapStateToProps, {asyncGetUserDetails})(router);

