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
} from 'react-native';

// Import WelcomeScreen from the separate file
import WelcomeScreen from '../screens/WelcomeScreen.js';

// --- Reusable Components ---
const FormInput = ({ label, placeholder, secureTextEntry = false, keyboardType = 'default', value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#6b6a6aff"
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

const SecondaryButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
    <Text style={styles.buttonSecondaryText}>{label}</Text>
  </TouchableOpacity>
);

// --- Screens ---
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
    <ScrollView contentContainerStyle={styles.screenContainer} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Sign up</Text>
      <FormInput label="Name*" placeholder="Enter your name" value={name} onChangeText={setName} />
      <FormInput label="Email*" placeholder="Enter your Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <FormInput label="Password*" placeholder="Create a Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <Text style={styles.passwordHint}>*Must be at least 8 Character</Text>
      <FormInput label="Phone Number*" placeholder="Enter your Phone No" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

      <View style={styles.buttonGroup}>
        <PrimaryButton label="SIGN UP" onPress={handleSignUp} />
        <SecondaryButton label="SIGN UP WITH GOOGLE" onPress={() => console.log('Sign up with Google pressed')} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.linkText}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      console.log("Logging in with:", { email, password });
      navigation.navigate('Home');
    } else {
      console.log("Email or password missing");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Log in</Text>
      <FormInput label="Email" placeholder="Enter your email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <FormInput label="Password" placeholder="Enter your Password" secureTextEntry={true} value={password} onChangeText={setPassword} />

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
          {rememberMe && <View style={styles.checkboxChecked} />}
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Remember Me</Text>
      </View>

      <View style={{ width: '70%', marginTop: 50, }}>
        <PrimaryButton label="LOG IN" onPress={handleLogin} />
      </View>

      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.loginFooter}>
        <PrimaryButton label="CREATE AN ACCOUNT" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.screenContainer, { justifyContent: 'center' }]}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.homeSubtitle}>You have successfully logged in.</Text>
      <View style={{ width: '80%', marginTop: 40 }}>
        <PrimaryButton
          label="Continue to our App"
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
    </View>
  );
};

// --- Main App Component with Navigation ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('SignUp');

  const navigation = {
    navigate: (page) => setCurrentPage(page),
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'SignUp':
        return <SignUpScreen navigation={navigation} />;
      case 'Login':
        return <LoginScreen navigation={navigation} />;
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'WelcomeScreen':
        return <WelcomeScreen navigation={navigation} />;
      default:
        return <SignUpScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Hide status bar completely */}
      <StatusBar hidden={true} translucent={true} />
      {renderPage()}
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContainer: {
    flexGrow: 1,
    padding: 24,
    marginTop: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    // removed paddingTop: 50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 8,
    fontWeight: '500',
  },
  login: {
    backgroundColor: '#ff049fff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1A1A1A',
  },
  passwordHint: {
    width: '100%',
    textAlign: 'left',
    fontSize: 12,
    color: '#888888',
    marginTop: -12,
    marginBottom: 20,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: '#6A5AED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: "#6A5AED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  buttonSecondaryText: {
    color: '#1A1A1A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 30,
    fontSize: 14,
    color: '#888888',
  },
  linkText: {
    color: '#6A5AED',
    fontWeight: 'bold',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#6A5AED',
    borderRadius: 2,
  },
  rememberMeText: {
    color: '#555',
  },
  loginFooter: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 24,
  },
  homeSubtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
});
