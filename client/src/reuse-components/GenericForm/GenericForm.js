import React from 'react';
import {connect} from "react-redux";
import {loadingAct} from "../../actions";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useFormik} from "formik";
import {withStyles} from "@material-ui/core/styles";
import styles, {costumStyles} from './GenericFormStyles';


function GenericForm({
                         applicationParams,
                         renderForm,
                         FormFieldsSpecifications,
                         onSubmit,
                         onSuccess,
                         loadingAct,
                         submitButtonProps = {name: 'Entrar'},
                         classes,
                         actions=[],
                        containerActionsStyle
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

            <div style={{...styles.containerButtons, ...containerActionsStyle}}>

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
                    </Button>
                }

                {
                    applicationParams.loading &&
                    <CircularProgress/>
                }

                {
                    actions.map((act, index) =>  <Button
                        key={"b_"+index }
                        color="secondary"
                        classes={{
                            root: classes.button
                        }}
                        {...act}
                        >
                        {act.name}
                    </Button>)
                }


            </div>
        </form>
    );
}


const mapStateToProps = state => ({applicationParams: state.applicationParams});
const GenericFormWithStyles = withStyles(costumStyles)(GenericForm)
export default connect(mapStateToProps, {loadingAct})(GenericFormWithStyles);

