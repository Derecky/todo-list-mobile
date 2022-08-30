import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import TrashSVG from '../../assets/svg/trash.svg';
import TrashRedSVG from '../../assets/svg/trash-red.svg';
import { useTask } from "../../hooks/useTask";
import { Task } from "../../models/Task";

import { styles } from './styles'

type TaskCardProps = {
  task: Task;
}

 
export function TaskCard({ task }: TaskCardProps) {
  const { title, _id, isCompleted } = task;
  const { deleteTask, completeTask} = useTask();

  const [pressed, setPressed] = useState(false);

  function handleRemove(){
    setPressed(oldState => !oldState)

    Alert.alert(
      `Deseja remover a tarefa?`,
      "Uma vez removida você não terá acesso à tarefa mais.",
      [
        {
          text: 'Cancelar',
          onPress: () => {setPressed(oldState => !oldState)},
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: () => {deleteTask(_id)}
        }
      ]
    )
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
        style={styles.cardTitleContainer}
        textStyle={isCompleted? styles.completedTitle : styles.notCompletedTitle}
        isChecked={isCompleted}
        onPress={handleToggleCheckTask}
      />
      <TouchableOpacity 
        onPress={handleRemove}
        style={pressed? styles.removeBtn: null}
        delayPressIn={5000}

      >
        {pressed ? <TrashRedSVG /> : <TrashSVG /> }
      </TouchableOpacity>
    </View>
  )
}