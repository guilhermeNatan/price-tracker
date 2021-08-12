import React, {Component} from 'react';
import styles from './ResetPasswordFormStyles';
import TextField from "@material-ui/core/TextField";

class ResetPasswordForm extends Component {
  render() {
    const {formik} = this.props;
    return (
        <>
          <TextField
              fullWidth
              id="newPassword"
              name="newPassword"
              label="Senha"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
              fullWidth
              id="confirmNewPassword"
              name="confirmNewPassword"
              label="Confirmar senha"
              type="password"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmNewPassword && Boolean(formik.errors.confirmNewPassword)}
              helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
          />
        </>
    );
  }
}

export default ResetPasswordForm;
