import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';



export default function MenuScreen({ navigation }) {

  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);



  const fetchPlaces = async () => {
    const API_KEY = 'TON_API_KEY_GOOGLE';
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlaces(data.results);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search for spots"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={fetchPlaces} />
      <FlatList
        data={places}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={{ marginVertical: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});