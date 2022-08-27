import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';

import { styles } from './styles'
 
export function TaskCard() {

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor="#5E60CE"
      />
      <Text style={styles.title}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.removeBtn}>
        <TrashSVG />
      </TouchableOpacity>
    </View>
  )
}