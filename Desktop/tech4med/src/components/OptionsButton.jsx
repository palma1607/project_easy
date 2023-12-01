import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/OptionsButtonStyle';

const OptionsButton = ({title, onPress, disabled, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : null]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.userText,
          disabled ? styles.disabledText : null,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export default OptionsButton;
