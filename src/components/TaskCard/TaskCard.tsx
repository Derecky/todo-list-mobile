import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';
import { Task } from "../../models/Task";

import { styles } from './styles'

type TaskCardProps = {
  task: Task;
  removeTask: (idTask: string) => void
}

 
export function TaskCard({ task, removeTask }: TaskCardProps) {
  const { title, _id } = task;

  function handleRemove(){
    removeTask(_id)
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={18}
        fillColor="#5E60CE"
        text={title}
        style={styles.title}
      />
      <TouchableOpacity 
        onPress={handleRemove}
        style={styles.removeBtn}
      >
        <TrashSVG />
      </TouchableOpacity>
    </View>
  )
}