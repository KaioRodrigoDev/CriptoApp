import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import Card from './components/Card';

export default function App() {

  const cripto = [
    {
      name: 'Bitcoin',
    },
    {
      name: 'Ethereum',
    }

  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#232630" barStyle="light-content" />
      <TextInput style={styles.TextInput} />
      {cripto.map((item, index) => {
        return <Card key={index} content={item.name} />
      }
      )}
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
