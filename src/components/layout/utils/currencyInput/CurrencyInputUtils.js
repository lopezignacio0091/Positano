import React from "react";
import NumberFormat from "react-number-format";

const CurrencyInputUtils = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
      decimalScale={2}
      fixedDecimalScale={true}
      isNumericString
    />
  );
};

export default CurrencyInputUtils;
