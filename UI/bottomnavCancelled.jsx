import React from 'react';
import { Linking, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomCancelled = () => {
  const phoneNumber = '8447380449'; // Replace with the desired phone number

  const handleCallClick = () => {
      Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
    <View style={styles.tab}>
        <Ionicons name="ios-airplane" size={24} color="black" />
        <Text style={styles.tabText}>Flight{'\n'}Status</Text>
    </View>
    <View style={styles.tab}>
        <Ionicons name="search" size={24} color="black" />
        <Text style={styles.tabText}>Find{'\n'}Trip</Text>
    </View>
    <View style={styles.tab}>
        <Ionicons name="airplane-outline" size={24} color="black" />
        <Text style={styles.tabText}>Book{'\n'}Flights</Text>
    </View>
    <TouchableOpacity style={styles.tab} onPress={handleCallClick}>
        <Ionicons name="call-sharp" size={24} color="black"/>
        <Text style={styles.tabText}>Call{'\n'}Agent</Text>
    </TouchableOpacity>
    </View>
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

export default BottomCancelled;