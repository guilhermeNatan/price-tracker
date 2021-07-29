import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { TextField } from "@material-ui/core";
import NumberFieldFormat from "./NumberFieldFormat";
import _ from 'lodash';
class NumberField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberformat: undefined,
        }
    }

    handleChange = event => {
        this.setState({ numberformat: event.target.value });
    };

    static getDerivedStateFromProps(props, state) {
        if (!_.isEqual(props.value, state.numberformat)) {
            return {
                numberformat: props.value,
            };
        }
        return null;
    }

    render() {
        const { numberformat } = this.state;

        return (
            <TextField
                {...this.props}
                value={numberformat}
                onChange={(event) => {
                    this.props.onChange(event);
                }}

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
