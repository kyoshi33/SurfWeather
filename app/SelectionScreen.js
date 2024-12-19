import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';




export default function SelectionScreen({ navigation }) {

  const continents = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

  const [search, setSearch] = useState('');
  const [spots, setSpots] = useState([]);



  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Profile Screen Let's Go</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>SURFWEATHER</Text>
        </View>
      </View>
      <View>
        <SearchBar placeholder="Search for surf spots..." onChangeText={setSearch} value={search} /> <FlatList data={continents} renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate('SpotDetails', { continent: item })}> <Text>{item}</Text> </TouchableOpacity>)} keyExtractor={(item) => item} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    width: '25%',
    height: '25%',
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