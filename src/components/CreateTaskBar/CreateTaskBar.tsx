import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PlusSVG from '../../assets/svg/plus.svg';

import { styles } from './styles';

type CreateTaskBarProps = {
  addTask: (taskTitle: string) => void
}

export function CreateTaskBar ({ addTask }: CreateTaskBarProps) {
  const [ newTask, setNewTask ] = useState<string>("")

  function handleCreateTask (){
    addTask(newTask)
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