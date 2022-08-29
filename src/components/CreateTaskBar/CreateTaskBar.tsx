import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PlusSVG from '../../assets/svg/plus.svg';
import { useTask } from "../../hooks/useTask";

import { styles } from './styles';

export function CreateTaskBar () {
  const [ newTask, setNewTask ] = useState<string>("")
  const { createTask } = useTask();

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