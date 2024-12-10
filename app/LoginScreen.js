import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { useState } from 'react'



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('Email');
  const [firstName, setFirstName] = useState('FirstName');
  const [name, setName] = useState('Name');
  const [password, setPassword] = useState('Password');



  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
      />
      <TextInput
        onChangeText={(value) => setName(value)}
        value={name}
      />
      <TextInput
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        onChangeText={(value) => setPassword(value)}
        value={password}
      />

      <Text>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Login" onPress={() => handleSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});