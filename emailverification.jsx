// VerifyEmailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { sendVerificationEmail } from '../services/authService';

const VerifyEmailScreen = ({ route, navigation }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const { email } = route.params;

  const handleVerify = async () => {
    try {
      // Implement verification logic here
      // You'll need to create an API endpoint for this
      Alert.alert('Success', 'Email verified successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleResendCode = async () => {
    try {
      await sendVerificationEmail(email);
      Alert.alert('Success', 'Verification code resent');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>Enter the code sent to {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleResendCode}>
        <Text style={styles.linkText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (similar to LoginScreen styles)
});

export default VerifyEmailScreen;