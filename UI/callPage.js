import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CallScreen = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleAbortCall = () => {
    // Logic to abort the call
  };

  const handleAnswerCall = () => {
    // Logic to answer the call
  };

  const handleShowKeypad = () => {
    // Logic to show the keypad
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    // Logic to mute/unmute the call
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('/Users/prosperbanda/Desktop/BeSmart/TeamTAI/UI/images.jpeg')} // Replace with the actual path to the user's image
          style={styles.userIcon}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.phoneNumber}>123-456-7890</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAbortCall}>
          <Text>Abort Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAnswerCall}>
          <Text>Answer Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShowKeypad}>
          <Text>Show Keypad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToggleMute}>
          <Text>{isMuted ? 'Unmute' : 'Mute'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  topContainer: {
    alignItems: 'center',
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 18,
    marginTop: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});

export default CallScreen;
