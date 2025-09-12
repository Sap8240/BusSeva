import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

// Add navigation prop to the function signature
export default function DetailScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background2.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>We should welcome you as?</Text>

          <View style={styles.buttonContainer}>
            {/* Driver Button */}
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate('Driver')}   // ✅ FIXED
                activeOpacity={0.7}
              >
                <View style={styles.circleButton}>
                  <Image
                    source={require('../assets/driver.jpg')}
                    style={styles.circleImage}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.designationText}>Driver</Text>
            </View>

            {/* Passenger Button */}
            <View style={{ alignItems: 'center', marginLeft: 20 }}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate('Passenger')}
                activeOpacity={0.7}
              >
                <View style={styles.circleButton}>
                  <Image
                    source={require('../assets/passenger.jpg')}
                    style={styles.circleImage}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.designationText}>Passenger</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.busSevaSherif}>BusSeva </Text>
              {'\n'} {'\n'}
              This Making public transport simple and smart.
              Track buses in real-time, never miss your ride.
              Book tickets instantly from your phone.
              Travel with ease, every time!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// StyleSheet is used for styling the components.
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Adds a dark overlay to make text more readable
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'serif',
    marginBottom: 75,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 80,
  },
  touchable: {
    marginHorizontal: 10,
  },
  circleButton: {
    width: 160,
    height: 160,
    borderRadius: 100, // Half of the width/height to make it a circle
    backgroundColor: '#008080', // A teal color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#f894944d', // A light teal color
    borderRadius: 55,
    padding: 20,
    marginTop: 30,
    width: '100%',
    maxWidth: 400,
  },
  infoText: {
    color: '#ffffffff',
    fontSize: 15,
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  bottomHandleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  bottomHandle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
  },
  circleImage: {
    width: 160,
    height: 160,
    borderRadius: 80, // Half of width/height for a perfect circle
  },
  designationText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },
  busSevaSherif: {
    fontWeight: 'bold',
    fontSize: 35, // Use a serif font
    color: '#fff',
  },
});
