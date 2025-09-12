import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';

// This is a functional component for the NFT Collector screen.
const DriverScreen = () => {
  // A placeholder function for the button press
  const handleGetStarted = () => {
    console.log('Get Started button pressed!');
    // In a real app, you would navigate to the next screen here.
  };

  return (
    // The ImageBackground component allows us to use an image as the background.
    // Replace the placeholder URI with your actual background image asset.
    <ImageBackground
      source={{ uri: 'https://placehold.co/800x1600/1e1e2d/e0e0e0?text=+' }} // Placeholder background
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {/* This inner View pushes all content to the bottom */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Top</Text>
          <Text style={styles.title}>Collector</Text>
          <Text style={styles.title}>NFTs</Text>

          <Text style={styles.subtitle}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <View style={styles.buttonInner}>
                 <Text style={styles.buttonText}>Turn on your Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

// All the styles for the component are defined here using StyleSheet.
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    // A semi-transparent overlay to make the text more readable
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns content to the bottom
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 70, // Adjust line height for better spacing
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0', // A slightly off-white for contrast
    marginTop: 20,
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    borderRadius: 50,
    // Styling to create the glowing effect
    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
    backgroundColor: '#ff8c00', // A fallback solid color
  },
  buttonInner: {
    // We create a separate inner view for the gradient-like effect
    // In a real app, you would use a LinearGradient component here.
    backgroundColor: 'orange', // Using a solid color that is bright
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DriverScreen;
