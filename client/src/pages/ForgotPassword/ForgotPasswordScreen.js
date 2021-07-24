import React from 'react';
import styles from './ForgotPasswordStyles';
import CardHeader from '@material-ui/core/es/CardHeader';
import CardContent from '@material-ui/core/es/CardContent';
import Card from '@material-ui/core/es/Card';
import {ForgotPasswordForm} from "../../reuse-components/ForgotPasswordForm";
import {connect} from 'react-redux';

import {BARRA} from "../../constants/RoutePaths";
import {withRouter} from "react-router-dom";
import AuthService from "../../service/AuthService";
import ForgotPasswordFormFieldsSpecifications
    from "../../reuse-components/ForgotPasswordForm/ForgotPasswordFormFieldsSpecifications";
import {Logo} from "../../reuse-components/Logo";
import {GenericForm} from "../../reuse-components/GenericForm";
import {withStyles} from "@material-ui/core/styles";
import {costumStyles} from "../../reuse-components/GenericForm/GenericFormStyles";
import colors from "../../theme/colors";


function ForgotPasswordScreen({history, classes}) {
    const [message, setMessage] = React.useState(false);

    return (
        <div style={styles.container}>
            <Logo />
            <Card style={styles.card}>
                <CardHeader
                    title="Recuperar senha"
                    titleTypographyProps={{
                        style: {
                            fontSize: '1.5rem',
                            color: colors.primaryTextColor
                        }
                    }}
                />
                <CardContent>
                    <GenericForm
                        renderForm={(formik) =>  <ForgotPasswordForm formik={formik} />}
                        FormFieldsSpecifications={ForgotPasswordFormFieldsSpecifications}
                        onSubmit={AuthService.forgotPassword}
                        onSuccess={() => setMessage("Verifique seu e-mail")}
                        submitButtonProps={{name: 'Receber código'}}
                        actions={[{
                            onClick:() => history.push(BARRA),
                            color:"secondary",
                            name: 'Voltar'

                        }]}

                       />

                    <div>{message}</div>

                </CardContent>
            </Card>
        </div>
    );
}

const ForgotPasswordScreenWithStyles = withStyles(costumStyles)(ForgotPasswordScreen)
const router = withRouter(ForgotPasswordScreenWithStyles);
export default connect(null, null)(router);

