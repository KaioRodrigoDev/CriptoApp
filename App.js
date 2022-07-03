import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import Card from './components/Card';

export default function App() {

  const cripto = [
    {
      name: 'Bitcoin',
      price: '$12,000.00',
      change: '+0.00%',
    },
    {
      name: 'Ethereum',
      price: '$12,000.00',
      change: '+0.00%',
    }

  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#232630" barStyle="light-content" />
      <TextInput style={styles.TextInput} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cripto}
        keyExtractor={item => String(item.name)}
        renderItem={({ item }) => (
          <Card content={item} />
        )}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  TextInput: {
    backgroundColor: '#121212',
    width: '90%',
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
  }
});
