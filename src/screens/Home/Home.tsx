import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { CreateTaskBar } from '../../components/CreateTaskBar';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { styles } from './styles';
import EmptyStateSVG from '../../assets/svg/Clipboard.svg'

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
  const QUANTITY_CREATED = 100;
  const QUANTITY_COMPLETED = 0;

  const CARDS_TESTE: any[] = [
    // '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    // '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  ]

  return(
    <View style={styles.homeContainer}>
      <StatusBar style='light'/>
      <Header />
      <CreateTaskBar />
      <View style={styles.container}>
        {renderHeaderTaskContainer(QUANTITY_CREATED, QUANTITY_COMPLETED)}
        <FlatList 
          data={CARDS_TESTE}
          renderItem={item => (<TaskCard />)}
          keyExtractor={item => (item)}
          ListEmptyComponent={renderEmptyState}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

