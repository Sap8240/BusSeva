import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar, // <-- Add this import
} from 'react-native';

// --- Reusable Components ---

const FormInput = ({ label, placeholder, secureTextEntry = false, keyboardType = 'default', value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A9A9A9"
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

// --- Login Screen Component ---

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      // In a real app, you would navigate to the home screen
      console.log("Logging in with:", { email, password });
      // For example: navigation.navigate('Home');
    } else {
      console.log("Email or password missing");
      // In a real app, you would show an alert or error message
    }
  };

  const handleCreateAccount = () => {
    console.log("Navigate to Sign Up page");
    // For example: navigation.navigate('SignUp');
  };

  const handleGoBack = () => {
    console.log("Navigate back");
    // For example: navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={true} /> {/* Hide the StatusBar */}
      <View style={styles.screenContainer}>

        <Text style={styles.title}>Log n</Text>
        <FormInput label="Email" placeholder="Enter your email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <FormInput label="Password" placeholder="Enter your Password" secureTextEntry={true} value={password} onChangeText={setPassword} />

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember e</Text>
        </View>

        <PrimaryButton label="LOG IN" onPress={handleLogin} />

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.loginFooter}>
          <PrimaryButton label="CREATE AN ACCOUNT" onPress={handleCreateAccount} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// --- Styles ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eeececff',
    alignItems: 'center',
    paddingTop: 0, // Remove or set to 0 to eliminate top gap
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
  buttonPrimary: {
    backgroundColor: '#6A5AED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    width: '130%',
    shadowColor: "#6A5AED",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonPrimaryText: {
    color: '#4d0000ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#6A5AED',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#1A1A1A',
    lineHeight: 30,
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
    color: '#7e0909ff',
  },
  loginFooter: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 24,
  },
});

export default Login;
