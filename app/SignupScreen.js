import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react'



export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('Email');
  const [firstName, setFirstName] = useState('FirstName');
  const [name, setName] = useState('Name');
  const [password, setPassword] = useState('Password');

  const [emailTouched, setEmailTouched] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>


        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/surfeur.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>SURFWEATHER</Text>
          </View>
        </View>


        <View style={styles.content}>
          <Text style={styles.title}>Everything you need to check the surf in one place.</Text>
          <Text style={styles.subtitle}>Create an account for free</Text>



          <View style={styles.name}>
            <TextInput
              style={styles.halfInput}
              onChangeText={(value) => setFirstName(value)}
              value={firstName}
              onFocus={() => setFirstName('')}
            />
            <TextInput
              style={styles.halfInput}
              onChangeText={(value) => setName(value)}
              value={name}
              onFocus={() => setName('')}
            />
          </View>

          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            value={email}
            onFocus={() => {
              if (!emailTouched) {
                setEmail('');
                setEmailTouched(true); // Marque le champ comme "touché"
              }
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            value={password}
            onFocus={() => setPassword('')}
          />


          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signin}>Signin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '30%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',

  },
  logoContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -80 }, { translateY: -60 }],
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: '-60',

  },
  content: {
    flex: 1,
    padding: 30,

  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,

  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  login: {
    textAlign: 'center',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
  },
  signin: {
    fontSize: 14,
    color: 'blue',
    marginLeft: 5,
  },
});