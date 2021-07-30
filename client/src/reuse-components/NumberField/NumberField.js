import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { TextField } from "@material-ui/core";
import NumberFieldFormat from "./NumberFieldFormat";
class NumberField extends Component {


    render() {
        return (
            <TextField
                {...this.props}
                InputProps={{
                    inputComponent: NumberFieldFormat,
                    inputProps: {
                        //TODO: É preciso tratar este InputProps para recusar alguns
                        // inputs como "type: number", que são aceitos para o TextField, mas não
                        // fazem sentido no contexto do NumberField.
                        ...this.props.InputProps,
                        ...this.props.numberFormatProps,
                        maxLength: 21,

                    }
                }}

            />
        );
    }
}

NumberField.propTypes = {
  numberFormatProps: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any
}

export default NumberField;
