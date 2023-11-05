import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlightCancellationScreen from './UI/CancellationScreen';
import Home from './UI/Home'

export default function App() {

  return <FlightCancellationScreen/>
  return <Home/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
