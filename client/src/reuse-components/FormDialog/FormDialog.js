import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useFormik} from "formik";


function FormDialog({ mainButtonName="FormDialog", confirmButtonName="Submit", cancelableButtonName="Cancel",
                        title, formikOptions, renderContent, errorMessage}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (values) => {
        formikOptions.onSubmit(values,  handleClose);
    }

    const formik = useFormik({
        ...formikOptions,
        onSubmit:handleSubmit ,
    })
    return(
        <>
            <Button  color="secondary"
                     onClick={handleClickOpen}
            >
                {mainButtonName}
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <form onSubmit={ formik.handleSubmit}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {renderContent(formik)}
                            <div style={{color: 'red'}}> {errorMessage}</div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            {cancelableButtonName}
                        </Button>
                        <Button type="submit" color="primary" autoFocus>
                            {confirmButtonName}
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </>
    )
}

export default FormDialog;
