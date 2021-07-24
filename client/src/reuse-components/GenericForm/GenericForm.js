import React from 'react';
import {connect} from "react-redux";
import {loadingAct} from "../../actions";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useFormik} from "formik";
import {withStyles} from "@material-ui/core/styles";
import {costumStyles} from './GenericFormStyles';

function GenericForm({
                         applicationParams,
                         renderForm,
                         FormFieldsSpecifications,
                         onSubmit,
                         onSuccess,
                         loadingAct,
                         submitButtonProps = {name: 'Entrar'},
                         classes,
                     }) {

    const submit = (values) => {
        onSubmit({
            values,
            onSuccess,
            onError: (error) => setErrorMessage(error.response && error.response.data ? error.response.data.mensagem : ''),
            beforeRequest: () => loadingAct(true),
            afterRequest: () => loadingAct(false)
        })
    }

    const formik = useFormik({
        ...FormFieldsSpecifications,
        onSubmit: submit
    })

    const [errorMessage, setErrorMessage] = React.useState(false);

    return (
        <form onSubmit={formik.handleSubmit}>
            {renderForm(formik)}


            <div style={{color: 'red'}}> {errorMessage}</div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '3vh'
            }}>


                {
                    !applicationParams.loading &&
                    <Button

                        type="submit"
                        color="primary"
                        variant="contained"
                        classes={{
                            root: classes.button
                        }}
                        {...submitButtonProps}
                    >
                        {submitButtonProps.name}
                    </Button>}
                {
                    applicationParams.loading &&
                    <CircularProgress/>
                }


            </div>
        </form>
    );
}


const mapStateToProps = state => ({applicationParams: state.applicationParams});
const GenericFormWithStyles = withStyles(costumStyles)(GenericForm)
export default connect(mapStateToProps, {loadingAct})(GenericFormWithStyles);

