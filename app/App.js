import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';

const DATA = [

  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Fourth Item',
  },
];

const Item = ({title})=> (
  <View style={styles.item}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => <Item title={item.title} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },

  item: {
    backgroundColor: "tomato",
    width: 200,
    height: 200,
    padding: 20,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },
});
