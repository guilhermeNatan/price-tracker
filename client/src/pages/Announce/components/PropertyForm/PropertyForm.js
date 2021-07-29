import React, {PureComponent} from 'react';
import styles from './PropertyFormStyles';
import TextField from "@material-ui/core/TextField";

function PropertyForm({formik }) {
    return (
        <>
            <TextField
                fullWidth
                id="title"
                name="title"
                label="Título"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
        </>
    );
}

export default PropertyForm;
