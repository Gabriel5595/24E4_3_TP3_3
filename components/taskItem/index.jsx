import { FlatList, StyleSheet, View, Text } from 'react-native';

const TaskList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});

export default TaskList;
