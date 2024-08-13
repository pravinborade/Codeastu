import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import { validateInput } from '../utils/validation';

const LoginForm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log("handling error")
    const validationError = validateInput(username, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    console.log("handling error done")
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', { username, password }, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch(loginSuccess(response.data));
      navigation.navigate('Recipes');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10 },
  errorText: { color: 'red' },
});

export default LoginForm;
