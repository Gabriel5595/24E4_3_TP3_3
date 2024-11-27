import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import TaskList from './components/taskItem/index.jsx';

export default function App() {
  const tasks = [
    { id: '1', title: 'Comprar frutas' },
    { id: '2', title: 'Estudar React Native' },
    { id: '3', title: 'Exercícios físicos' },
    { id: '4', title: 'Ler um livro' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TaskList data={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
