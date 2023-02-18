import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((e) => alert(e));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: 'https://cdn.discordapp.com/attachments/974721169284550707/1076396281758494742/3d-speech-bubble-with-quotes-icons-on-a-purple-background-minimal-blank-3d-chat-boxes-sign-3d-and-shadow-illustration-vector.png',
        }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button
        buttonStyle={{ backgroundColor: '#C8AAF4' }}
        containerStyle={styles.button}
        onPress={signIn}
        title="Login"
      />
      <Button
        buttonStyle={{ borderColor: '#C8AAF4' }}
        titleStyle={{ color: '#C8AAF4' }}
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
