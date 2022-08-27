import React from "react";
import { Text, View } from "react-native";

import { styles } from './styles';

import LogoSVG from '../../assets/svg/Logo.svg';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <LogoSVG />
      </Text>
    </View>
  )
}