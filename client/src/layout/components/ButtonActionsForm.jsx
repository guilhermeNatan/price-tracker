import React from 'react';

const ButtonActionsForm = ({
  onClickCancelar, onClickAlterar, onClickSalvar, isAcaoEditarOuCriar,
}) => (
  <div>

    {
          !isAcaoEditarOuCriar
          && <button type="button" className="btn btn-primary" onClick={onClickAlterar} style={{ margin: 10 }}>ALTERAR</button>
      }

    {
          isAcaoEditarOuCriar
          && (
          <div>
            <button type="button" className="btn btn-secondary" onClick={onClickCancelar} style={{ margin: 10 }}>CANCELAR</button>
            <button type="button" className="btn btn-primary" onClick={onClickSalvar} style={{ margin: 10 }}>SALVAR</button>
          </div>
          )
      }


  </div>
);

export default ButtonActionsForm;
