import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen: React.FC<{navigation: any}> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.header}>Login</Text>
    <LoginForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  header: {fontSize: 24, marginBottom: 20},
});

export default LoginScreen;
