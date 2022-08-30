import React, { useRef, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PlusSVG from '../../assets/svg/plus.svg';
import { useTask } from "../../hooks/useTask";

import { styles } from './styles';


const PLACEHOLDER_TEXT = 'Adicione uma nova tarefa'
const PLACEHOLDER_TEXT_COLOR = '#808080'

export function CreateTaskBar () {
  const [ newTask, setNewTask ] = useState<string>("")
  const { createTask } = useTask();
  const [ pressed, setPressed ] = useState(true)

  function handleCreateTask (){
    setPressed(oldState => !oldState)
    setTimeout(() => {setPressed(oldState => !oldState)}, 300)
    createTask(newTask)
    setNewTask('')     
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={setNewTask}
        placeholder={PLACEHOLDER_TEXT}
        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
      />
      <TouchableOpacity
        style={pressed ? styles.btnPressed : styles.btnUnpressed}
        activeOpacity={0.9}
        onPress={handleCreateTask}
      >
        <PlusSVG width="16" height="16"/>
      </TouchableOpacity>
    </View>
  )
}