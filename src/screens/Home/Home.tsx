import React from 'react';
import { Text, View } from 'react-native';
import { CreateTaskBar } from '../../components/CreateTaskBar';
import { Header } from '../../components/Header';

export function Home() {
  return(
    <View>
      <Header />
      <CreateTaskBar />
      <Text>
        Home
      </Text>
    </View>
  )
}

