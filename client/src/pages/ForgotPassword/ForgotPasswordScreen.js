import React, {Component} from 'react';
import styles from './ForgotPasswordStyles';

import Button from "@material-ui/core/Button";
import CardHeader from '@material-ui/core/es/CardHeader';
import CardContent from '@material-ui/core/es/CardContent';
import Card from '@material-ui/core/es/Card';
import {ForgotPasswordForm} from "../../reuse-components/ForgotPasswordForm";
import {useFormik} from "formik";
import {connect} from 'react-redux';

import {BARRA} from "../../constants/RoutePaths";
import {withRouter} from "react-router-dom";
import AuthService from "../../service/AuthService";
import ForgotPasswordFormFieldsSpecifications
    from "../../reuse-components/ForgotPasswordForm/ForgotPasswordFormFieldsSpecifications";


function ForgotPasswordScreen({history}) {
    const [message, setMessage] = React.useState(false);

    const getCode = (values) => {
        AuthService.forgotPassword(values, () => setMessage("Verifique seu e-mail"), (error) => setMessage(error.response.data.mensagem))
    }

    const formik = useFormik({
        ...ForgotPasswordFormFieldsSpecifications,
        onSubmit: getCode
    })

    return (
        <div style={styles.container}>
            <Card style={styles.card}>
                <CardHeader
                    title="Troca e vendas Capelinha"
                />
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <ForgotPasswordForm
                            formik={formik}
                        />
                        <Button type="submit"
                                color="primary"
                                variant="contained"
                                style={{marginTop: '3vh'}}>
                            Receber código
                        </Button>


                    </form>
                    <div>{message}</div>
                    <Button
                        onClick={() => history.push(BARRA)}
                        color="primary"
                        variant="contained"
                        style={{marginTop: '3vh'}}
                        autoFocus>
                        Voltar
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}


const router = withRouter(ForgotPasswordScreen);
export default connect(null, null)(router);

