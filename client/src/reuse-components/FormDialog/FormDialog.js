import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useFormik} from "formik";


function FormDialog({ mainButtonName="FormDialog", confirmButtonName="Submit", cancelableButtonName="Cancel",
                        title, formikOptions, renderContent}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik(formikOptions)
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
                <form onSubmit={(...event) => {
                    formik.handleSubmit(...event);
                    handleClose();
                }}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {renderContent(formik)}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            {confirmButtonName}
                        </Button>
                        <Button type="submit" color="primary" autoFocus>
                            {cancelableButtonName}
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </>
    )
}

export default FormDialog;
