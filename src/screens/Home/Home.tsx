import React from 'react';
import {StatusBar } from 'react-native';
import { FlatList, Text, View } from 'react-native';
import { CreateTaskBar } from '../../components/CreateTaskBar';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { styles } from './styles';
import EmptyStateSVG from '../../assets/svg/Clipboard.svg'
import { Task } from '../../models/Task';
import { useTask } from '../../hooks/useTask';

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

  const { tasks } = useTask()
  function countCompletedTasks(tasks: Task[]) {    
    const response = tasks.reduce((acc, task) => {
      return task.isCompleted ? acc + 1 : acc;
    }, 0)
    
    return response
  }

  const quantityCreated = tasks.length
  const quantityCompleted = countCompletedTasks(tasks)

  return(
    <View style={styles.homeContainer}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
      <Header />
      <CreateTaskBar />
      <View style={styles.container}>
        {renderHeaderTaskContainer(quantityCreated, quantityCompleted)}
        <FlatList 
          data={tasks}
          renderItem={renderTask => (
            <TaskCard 
              task={renderTask.item}
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

