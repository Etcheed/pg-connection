// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { resetPassword } from '../services/authService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      // Navigation to main app screen will be handled by a navigation container
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // ... (rest of the component remains the same)
};

// ... (styles remain the same)

export default LoginScreen;