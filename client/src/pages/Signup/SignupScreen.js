import React from 'react';
import styles from './SignupStyles';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {asyncGetUserDetails} from "../../actions";
import {Logo} from "../../reuse-components/Logo";
import {GenericForm} from "../../reuse-components/GenericForm";
import AuthService from "../../service/AuthService";
import {BARRA} from "../../constants/RoutePaths";
import Card from '@material-ui/core/es/Card';
import CardContent from '@material-ui/core/es/CardContent';
import colors from "../../theme/colors";
import CardHeader from '@material-ui/core/es/CardHeader';
import {SignUpFormFields} from "../../reuse-components/SignUpFormFields";
import SignUpFormFieldsSpecifications
    from "../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";

function  SignupScreen({asyncGetUserDetails, history}) {
    return (
        <div style={styles.container}>
            <Logo typographyProps={{
                onClick: () => history.push(BARRA)
            }}/>
          <Card style={styles.card}>
            <CardHeader
                title="Compre tudo que quiser, venda tudo que puder"
                titleTypographyProps={{
                  style: {
                    fontSize: '1.5rem',
                    color: colors.primaryTextColor
                  }
                }}
            />
            <CardContent>
              <GenericForm
                  renderForm={(formik) => (<SignUpFormFields formik={formik}/>)}
                  FormFieldsSpecifications={SignUpFormFieldsSpecifications}
                  onSubmit={AuthService.signup}
                  onSuccess={() => asyncGetUserDetails(() => history.push(BARRA))}
              />


            </CardContent>
          </Card>
        </div>
    );
  }


const mapStateToProps = state => ({ applicationParams: state.applicationParams });
const router = withRouter(SignupScreen);
export default connect(mapStateToProps, {asyncGetUserDetails})(router);

