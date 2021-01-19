import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import t from 'tcomb-form';


const TipoMovimentacaoEstoque = t.enums({
  Entrada: 'Entrada',
  Saida: 'Saída',
});


const EstoqueSchema = t.struct({
  tipoMovimentacaoEstoque: TipoMovimentacaoEstoque,
  quantidade: t.Number,
});

const options = {
  fields: {
    quantidade: {
      type: 'number',
    },

  },
};


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class EstoqueDialog extends React.Component {
    handleClickSave = () => {
      const { onClickSalvar } = this.props;
      const movimentacao = this.formRef.getValue();
      if (movimentacao) {
        onClickSalvar(movimentacao);
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
              <t.form.Form ref={rf => this.formRef = rf} type={EstoqueSchema} options={options} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                {
                      'Cancelar'
                 }
              </Button>
              <Button onClick={this.handleClickSave} color="primary">
                {
                      'Salvar'
                 }
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}
EstoqueDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};


export default EstoqueDialog;
