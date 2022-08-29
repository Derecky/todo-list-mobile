import React, { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PlusSVG from '../../assets/svg/plus.svg';
import { TaskContext } from "../../contexts/TaskContext";

import { styles } from './styles';

export function CreateTaskBar () {
  const [ newTask, setNewTask ] = useState<string>("")
  const { createTask } = useContext(TaskContext)

  function handleCreateTask (){
    createTask(newTask)
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={setNewTask}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.9}
        onPress={handleCreateTask}
      >
        <PlusSVG width="16" height="16"/>
      </TouchableOpacity>
    </View>
  )
}