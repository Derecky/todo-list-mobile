import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../../models/Task";

import { styles } from './styles'

type TaskCardProps = {
  task: Task;
}

 
export function TaskCard({ task }: TaskCardProps) {
  const { title, _id, isCompleted } = task;
  const { deleteTask, completeTask} = useContext(TaskContext)

  function handleRemove(){
    deleteTask(_id)
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