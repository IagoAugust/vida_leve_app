import React from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';
import { styles } from './style';

type InputProps = {
  label: string;
}

const Input = ({ label, ...rest } : InputProps & TextInputProps) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        returnKeyType="next"
        // placeholder={label}
        {...rest}
      />
    </>
  );
};

export default Input;
