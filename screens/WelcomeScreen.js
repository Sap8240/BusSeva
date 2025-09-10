import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* This component hides the device's status bar */}
      <StatusBar hidden={true} />

      {/* Logo Image */}
      <Image
        source={require('../assets/adaptive-icon.png')} // Ensure this path is correct
        style={styles.logo}
      />

      {/* Main Title */}
      <Text style={styles.title}>Where is my Bus ??</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Track Your Ride, Anytime, Anywhere</Text>

      {/* Sign In Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN AS DRIVER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN AS USER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#964B00', // A brown/maroon color similar to the image
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6C63FF', // A pleasant blue/purple shade
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 30, // Creates the pill shape
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    // Adding a subtle shadow for depth
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default WelcomeScreen;