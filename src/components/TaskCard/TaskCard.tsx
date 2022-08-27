import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';
import { Task } from "../../models/Task";

import { styles } from './styles'

type TaskCardProps = {
  task: Task;
  removeTask: (idTask: string) => void;
  completeTask: (idTask: string) => void;
}

 
export function TaskCard({ task, removeTask, completeTask }: TaskCardProps) {
  const { title, _id, isCompleted } = task;

  function handleRemove(){
    removeTask(_id)
  }

  function handleToggleCheckTask() {
    completeTask(_id)
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={18}
        fillColor="#5E60CE"
        text={title}
        style={styles.title}
        isChecked={isCompleted}
        onPress={handleToggleCheckTask}
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