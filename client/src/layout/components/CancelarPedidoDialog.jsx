import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import t from 'tcomb-form';

const MotivoSchema = t.struct({
  motivo: t.String,
});

const options = {
  fields: {
    motivo: {
      type: 'textarea',
      length: '5',
      attrs: {
        maxlength: '200',
      },
    },
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class CancelarPedidoDialog extends React.Component {
    handleClickSave = () => {
      const { onClickSalvar } = this.props;
      const formValues = this.formRef.getValue();
      if (formValues) {
        onClickSalvar(formValues.motivo);
      }
    };

    render() {
      const { handleClose, open, title } = this.props;
      return (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {title}
            </DialogTitle>
            <DialogContent>
              <t.form.Form ref={rf => this.formRef = rf} options={options} type={MotivoSchema} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                { 'Cancelar' }
              </Button>
              <Button onClick={this.handleClickSave} color="primary">
                { 'Salvar' }
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}
CancelarPedidoDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};


export default CancelarPedidoDialog;
