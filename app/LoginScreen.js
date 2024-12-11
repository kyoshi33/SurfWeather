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
          <Text style={styles.title}>"Stay connected to the ocean, wherever you are."</Text>
          <Text style={styles.subtitle}>Connexion</Text>


          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            value={email}
            onFocus={() => {
              if (!emailTouched) {
                setEmail('');
                setEmailTouched(true);
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
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConnexion} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Connexion</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,

  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBack: {
    backgroundColor: '#65d1dc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    width: '40%',
    marginTop: '120',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConnexion: {
    backgroundColor: '#ff999d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    width: '40%',
    marginTop: '120',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});