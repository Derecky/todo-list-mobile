import React, { useState } from 'react';
import {StatusBar } from 'react-native';
import { FlatList, Text, View } from 'react-native';
import { CreateTaskBar } from '../../components/CreateTaskBar';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { styles } from './styles';
import EmptyStateSVG from '../../assets/svg/Clipboard.svg'
import { Task } from '../../models/Task';

import { faker } from '@faker-js/faker'

function renderHeaderTaskContainer(quantityCreated: number, quantityCompleted: number) {
  return (
    <View style={styles.labelsContainer}>
      <View style={styles.labelContainer}>
        <Text 
          style={{...styles.created, ...styles.label}}
        >
          Criadas
        </Text>
        <Text style={styles.quantity}>{quantityCreated}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text 
          style={{...styles.label, ...styles.completed}}
        >
          Concluídas
        </Text>
        <Text style={styles.quantity}>{quantityCompleted}</Text>
      </View>
    </View>
  )
}

function renderEmptyState() {
  return(
    <View style={styles.emptyStateContainer}>
      <EmptyStateSVG />
      <Text 
        style={{...styles.emptyStateTextBold, ...styles.emptyStateSubtitle}}
      >
        Você ainda não tem tarefas cadastradas
        </Text>
      <Text style={styles.emptyStateSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

export function Home() {
  const [ tasks, setTasks ] = useState<Task[]>([
    {_id: '1', title: 'Estudar React', isCompleted: false},
    {_id: '2', title: 'Comer fruta', isCompleted: false},
    {_id: '3', title: 'Estudar webpack', isCompleted: false},
  ])

  function createTask(taskTitle: string) {
    const newTask: Task = {
      _id: faker.datatype.uuid(),
      title: taskTitle,
      isCompleted: false
    }
    setTasks(oldState => [...oldState, newTask])
  }

  function deleteTask(idTask: string){
    setTasks(oldState => oldState.filter(task => task._id !== idTask))
  }

  const QUANTITY_CREATED = 100;
  const QUANTITY_COMPLETED = 0;

  return(
    <View style={styles.homeContainer}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
      <Header />
      <CreateTaskBar addTask={createTask}/>
      <View style={styles.container}>
        {renderHeaderTaskContainer(QUANTITY_CREATED, QUANTITY_COMPLETED)}
        <FlatList 
          data={tasks}
          renderItem={renderTask => (
            <TaskCard 
              task={renderTask.item}
              removeTask={deleteTask}
            />
          )}
          keyExtractor={task => (task._id)}
          ListEmptyComponent={renderEmptyState}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

