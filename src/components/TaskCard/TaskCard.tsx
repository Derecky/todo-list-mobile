import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';
import { Task } from "../../models/Task";

import { styles } from './styles'

type TaskCardProps = {
  task: Task;
}

 
export function TaskCard({ task }: TaskCardProps) {
  const { title } = task;

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={18}
        fillColor="#5E60CE"
        text={title}
        style={styles.title}
      />
      <TouchableOpacity style={styles.removeBtn}>
        <TrashSVG />
      </TouchableOpacity>
    </View>
  )
}