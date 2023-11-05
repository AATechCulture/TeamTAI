import React, { useState } from 'react';
import { Linking, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CancelledScreen from './Cancelled';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  const phoneNumber = '8447380449'; // Replace with the desired phone number

  const [showScreen, setShowScreen] = useState(false);

  const handleCallClick = () => {
    Linking.openURL(`tel:${phoneNumber}`);
    
    setTimeout(() => {
      setShowScreen(true);
    }, 10000);
  };

  return (
    // <View style={styles.container}>
    // <View style={styles.tab}>
    //     <Ionicons name="ios-airplane" size={24} color="black" />
    //     <Text style={styles.tabText}>Flight{'\n'}Status</Text>
    // </View>
    // <View style={styles.tab}>
    //     <Ionicons name="search" size={24} color="black" />
    //     <Text style={styles.tabText}>Find{'\n'}Trip</Text>
    // </View>
    // <View style={styles.tab}>
    //     <Ionicons name="airplane-outline" size={24} color="black" />
    //     <Text style={styles.tabText}>Book{'\n'}Flights</Text>
    // </View>
    // <TouchableOpacity style={styles.tab} onPress={handleCallClick}>
    //     <Ionicons name="call-sharp" size={24} color="black"/>
    //     <Text style={styles.tabText}>Call{'\n'}Agent</Text>
    // </TouchableOpacity>
    // </View>
<NavigationContainer>
  <Tab.Navigator
  initialRouteName="Flight Status"
  screenOptions={{
    tabBarActiveTintColor: '#e91e63',
  }}
  >
    <Tab.Screen
        name="Flight Status"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Flight Status',
          tabBarIcon: () => (
            <Ionicons name="ios-airplane" color="black" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Ionicons name="search" color="black" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Book Flight"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Book Flight',
          tabBarIcon: () => (
            <Ionicons name="airplane-outline" color="black" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Flight status"
        component={CancelledScreen}
    
        options={{
          tabBarLabel: 'Call Agent',
          tabBarIcon: () => (
          <Ionicons name="call-sharp" color="black" size={24} onPress={handleCallClick}/>
          ),
        
        }}
      />
  </Tab.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 100,
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 5, 
    marginBottom: 10, 
  },
});

export default BottomNavigation;