import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">

        <View style={styles.contentOverlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
             Welcome to {'\n'}BusSeva
            </Text>
            <Text style={styles.subtitle}>
              Track Your Ride, Anytime, Anywhere
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Signin')}
            >
              <View style={styles.buttonSvgContainer}>
                
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>GET STARTED</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentOverlay: {
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 24,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#D11D1D',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonSvgContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  buttonTextContainer: {
    position: 'relative',
    zIndex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;