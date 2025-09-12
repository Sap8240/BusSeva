import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  Platform,
} from 'react-native';
import DetailScreen from '../screens/DetailScreen';

// --- Placeholder for WelcomeScreen ---
// To make the app runnable, I've created a simple WelcomeScreen here.
const WelcomeScreen = ({ navigation }) => (
  <View style={[styles.screenContainer, { justifyContent: 'center', backgroundColor: '#1A1A1A' }]}>
    <Text style={styles.title}>Welcome to the App!</Text>
    <Text style={styles.homeSubtitle}>This is the main content area.</Text>
  </View>
);


// --- Reusable Components (Restyled) ---
const FormInput = ({ placeholder, secureTextEntry = false, keyboardType = 'default', value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  </View>
);

const PrimaryButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
    <Text style={styles.buttonPrimaryText}>{label}</Text>
  </TouchableOpacity>
);


// --- Screens (Restyled) ---
const AuthScreenWrapper = ({ children }) => (
  <ImageBackground
    source={require('../assets/background.jpg')} // <-- Use your local image here
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.overlay} />
    <View style={styles.bottomContainer}>
      {children}
    </View>
  </ImageBackground>
);

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    if (name && email && password.length >= 8 && phone) {
      console.log("Signing up with:", { name, email, password, phone });
      navigation.navigate('Login');
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <AuthScreenWrapper>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start your seamless journey with us.</Text>

        <FormInput placeholder="Enter your Name" value={name} onChangeText={setName} />
        <FormInput placeholder="Enter your Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <FormInput placeholder="Create a Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <FormInput placeholder="Enter your Phone Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

        <View style={{marginTop: 20, width: '100%'}}>
            <PrimaryButton label="SIGN UP" onPress={handleSignUp} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginTop: 20}}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.linkText}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthScreenWrapper>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      console.log("Logging in with:", { email, password });
      navigation.navigate('DetailScreen'); // Navigate to DetailScreen after login
    } else {
      console.log("Email or password missing");
    }
  };

  return (
    <AuthScreenWrapper>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.subtitle}>Log in to continue your seamless journey</Text>

            <FormInput placeholder="Enter Your Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <FormInput placeholder="Enter Your Password" secureTextEntry={true} value={password} onChangeText={setPassword} />

            <View style={{marginTop: 20, width: '100%'}}>
                <PrimaryButton label="LOGIN" onPress={handleLogin} />
            </View>


            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{marginTop: 40}}>
                <Text style={styles.footerText}>
                    Don't have an account? <Text style={styles.linkText}>Sign up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    </AuthScreenWrapper>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.screenContainer, { justifyContent: 'center', backgroundColor: '#1A1A1A' }]}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.homeSubtitle}>You have successfully logged in.</Text>
    </View>
  );
};

// --- Main App Component with Navigation ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('Login'); // Start with Login screen

  const navigation = {
    navigate: (page) => setCurrentPage(page),
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'SignUp':
        return <SignUpScreen navigation={navigation} />;
      case 'Login':
        return <LoginScreen navigation={navigation} />;
      case 'DetailScreen':
        return <DetailScreen navigation={navigation} />; // <-- Add this
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'WelcomeScreen':
        return <WelcomeScreen navigation={navigation} />;
      default:
        return <LoginScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      {renderPage()}
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fffdfd1c',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Ensures children are at the bottom
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.62)', // Dark overlay
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  screenContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Pushes content to bottom
    alignItems: 'center',
    padding: 24,
  },
  formContainer: {
    width: '100%',
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'rgba(26, 26, 26, 0.76)', // More transparent
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 32 : 16,
    // Optional: Add shadow for iOS and elevation for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12,
    // Optional: Add blur effect if using expo-blur or similar
    // overflow: 'hidden',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.08)', // Slightly more transparent
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 0,
  },
  buttonPrimary: {
    backgroundColor: '#E53935', // Vibrant red color
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: "#E53935",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  linkText: {
    color: '#E53935',
    fontWeight: 'bold',
  },
  homeSubtitle: {
    fontSize: 18,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 8,
  },
});
