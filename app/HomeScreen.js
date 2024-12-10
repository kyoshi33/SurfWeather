import {
  Button,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>

      <ImageBackground style={styles.image} source={require('../assets/vague.jpg')} >
        <Text style={styles.title}>SURFWEATHER</Text>
        <TouchableOpacity
          style={styles.naming}
          onPress={() => navigation.navigate('Weather')}
        >
          <Text style={styles.namingText}>Let's go to Surf</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Créer un profil</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: '40%',
    textAlign: 'center',
  },
  naming: {
    backgroundColor: '#ff999d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  namingText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#65d1dc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});