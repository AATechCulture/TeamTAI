import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

function CallButton() {
  const word = '\n \n \n \n HelolololCall'
  const phoneNumber = '7707107327'; // Replace with the desired phone number

  const handleCallClick = () => {
      Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity onClick={handleCallClick}>
      <Text> {word} {phoneNumber}</Text>
    </TouchableOpacity>
  );
}

export default CallButton;
