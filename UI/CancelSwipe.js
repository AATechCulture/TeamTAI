import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const word = "Call JARVIS \nAvoid Long Wait Times"

const BottomSwipe = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event([{ nativeEvent: { translationY: translateY } }], {
    useNativeDriver: true,
  });

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateY, {
        toValue: nativeEvent.translationY > 0 ? 300 : 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View>
          <TouchableOpacity style={styles.arrowContainer}>
            <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/clock.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Flight Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/search.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Find Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/plane.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Book Flights</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ai}>
          <View>
            <TouchableOpacity style={styles.icon}>
                <Text style={{textAlign: 'center', fontSize: 15, fontStyle:'Bold',  margin:5, color: 'blue'}}>{word}</Text>
                <Image source={require('../assets/call.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/baggage.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>AI Tracking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/aisearch.jpg')} style={styles.iconImage} />
            <Text style={styles.iconText}>AI Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/money.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>AI refunds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/access.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>AI Accessibility</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    ai:{
        borderBlockColor: 'grey',
        padding: 10,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        elevation: 5, // Add shadow for Android
    },
    arrowContainer: {
        alignItems: 'center',
    },
    arrowIcon: {
        width: 30,
        height: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    icon: {
        alignItems: 'center',
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    iconText: {
        marginTop: 10,
        fontSize: 16,
        margin: 20,
        color: 'blue'
    },
});

export default BottomSwipe;