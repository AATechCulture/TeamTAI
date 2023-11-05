import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './UI/Home';
import BottomNavigation from './UI/bottomnav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
//     <NavigationContainer>
//  <BottomNavigation/>
//     </NavigationContainer>
  //  <HomeScreen/>
  <BottomNavigation/>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
