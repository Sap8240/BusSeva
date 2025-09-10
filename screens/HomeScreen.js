import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, // This is the button we'll modify
  StatusBar,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

// Your HomeScreen component now accepts the 'navigation' prop
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.cardContainer}>


        {/* --- Main Content (No changes here) --- */}
        <View style={styles.mainContent}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/88f29e01f169b51f3766a1bdfcf47ce3608c5490?width=576' }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.title}>
              Where is my{'\n'}Bus ??
            </Text>
            <Text style={styles.subtitle}>
              Track Your Ride, Anytime, Anywhere
            </Text>
          </View>
        </View>

        {/* --- Get Started Button (MODIFIED) --- */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            // Add the onPress handler here
            onPress={() => navigation.navigate('Signin')}
          >
            <View style={styles.buttonSvgContainer}>
              <Svg width="100%" height="100%" viewBox="0 0 343 60" preserveAspectRatio="none">
                <Path
                  d="M8 8H171.5H253.25H295.162L335 32V52H171.5H89.75H47.8376L8 36V8Z"
                  fill="#6787F6"
                />
              </Svg>
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

// --- Styles (No changes here) ---
const customColors = {
  beige: '#F5F3E6',
  textPrimary: '#3A3A3A',
  textSecondary: '#5A5A5A',
  buttonBlue: '#6787F6'
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: isTablet ? '#E5E7EB' : '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isTablet ? 32 : 0,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: customColors.beige,
    width: '100%',
    maxWidth: 480,
    flexDirection: 'column',
    overflow: 'hidden',
    ...(isTablet && {
      height: 896,
      minHeight: 0,
      borderRadius: 40,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 24,
    }),
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: isTablet ? 16 : 8,
    paddingBottom: 12,
  },
  statusTime: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: -0.2,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1.5,
    height: 12,
  },
  signalBar: {
    width: 4,
    backgroundColor: 'black',
    borderRadius: 1,
  },
  batteryContainer: {
    marginLeft: 4,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  batteryOuter: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 3,
    padding: 2,
  },
  batteryInner: {
    backgroundColor: 'black',
    borderRadius: 1.5,
    flex: 1,
  },
  batteryTerminal: {
    position: 'absolute',
    right: -2,
    top: 4,
    width: 1.5,
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: isTablet ? 48 : 32,
  },
  logoContainer: {
    marginBottom: isTablet ? 64 : 48,
  },
  logo: {
    width: isTablet ? 288 : 256,
    height: isTablet ? 288 : 256,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: isTablet ? 48 : 32,
  },
  title: {
    fontFamily: 'Rhodium Libre',
    fontSize: isTablet ? 48 : 40,
    lineHeight: isTablet ? 56 : 48,
    color: customColors.textPrimary,
    letterSpacing: -0.333,
    marginBottom: isTablet ? 24 : 16,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Exo',
    fontSize: isTablet ? 20 : 18,
    color: customColors.textSecondary,
    opacity: 0.8,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  buttonWrapper: {
    paddingHorizontal: 24,
    paddingBottom: isTablet ? 64 : 48,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 384,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(145, 115, 209, 0.8)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonSvgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonTextContainer: {
    position: 'absolute',
  },
  buttonText: {
    fontFamily: 'Exo',
    fontWeight: 'bold',
    fontSize: isTablet ? 20 : 18,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;