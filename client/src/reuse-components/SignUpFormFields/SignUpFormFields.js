import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class SignUpFormFields extends Component {
  render() {
    const {formik} = this.props;
    return (
      <>
        <TextField
            fullWidth
            id="nome"
            name="nome"
            label="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
        />
        <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            fullWidth
            id="password"
            name="password"
            label="Senha"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
            fullWidth
            id="confirmpassword"
            name="confirmpassword"
            label="Confirmar senha"
            type="password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
            helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
        />
      </>
    );
  }
}

export default SignUpFormFields;
