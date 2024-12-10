import { Button, StyleSheet, Text, View } from 'react-native';

export default function WeatherScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Weather Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
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