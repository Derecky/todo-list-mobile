import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import PlusSVG from '../../assets/svg/plus.svg';

import { styles } from './styles';

export function CreateTaskBar () {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.9}
      >
        <PlusSVG width="16" height="16"/>
      </TouchableOpacity>
    </View>
  )
}