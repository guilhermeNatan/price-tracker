import React from 'react';
import NumberFormat from 'react-number-format';

const NumberFieldFormat = (props) => {
    const { onChange } = props;

    // propriedade onChage é removida para que não sobrescreva o onChange do NumberFormat
    const newProps = {...props};
    delete newProps.onChange

    return (
        <NumberFormat
            getInputRef={props.inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        value: values.floatValue,
                    },
                });
            } }

            decimalSeparator={','}
            thousandSeparator={'.'}
            fixedDecimalScale
            decimalScale={0}
            {...newProps}
        />
    );
}

NumberFieldFormat.propTypes = {};

export default NumberFieldFormat;