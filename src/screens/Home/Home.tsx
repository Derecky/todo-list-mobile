import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CreateTaskBar } from '../../components/CreateTaskBar';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { styles } from './styles';

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

export function Home() {
  const QUANTITY_CREATED = 100;
  const QUANTITY_COMPLETED = 0;

  return(
    <View style={styles.homeContainer}>
      <StatusBar style='light'/>
      <Header />
      <CreateTaskBar />
      <View style={styles.container}>
        {renderHeaderTaskContainer(QUANTITY_CREATED, QUANTITY_COMPLETED)}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </ScrollView>
      </View>
    </View>
  )
}

