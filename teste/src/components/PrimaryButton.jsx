import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {primaryButtonStyles} from '../styles/PrimaryButtonStyles';

const PrimaryButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[
        primaryButtonStyles.button,
        disabled ? primaryButtonStyles.disabledButton : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          primaryButtonStyles.text,
          disabled ? primaryButtonStyles.disabledText : null,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
