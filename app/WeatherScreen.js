import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const WeatherTab = () => (
  <View style={styles.scene}>
    <Text>Weather Information</Text>
  </View>
);

const ForecastTab = () => (
  <View style={styles.scene}>
    <Text>Forecast Details</Text>

  </View>
);

const LiveTab = () => (
  <View style={styles.scene}>
    <Text>Live Conditions</Text>
  </View>
);

const PhotosTab = () => (
  <View style={styles.scene}>
    <Text>Surf Spot Photos</Text>
  </View>
);

export default function WeatherScreen({ navigation }) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'weather', title: 'Weather' },
    { key: 'forecast', title: 'Forecast' },
    { key: 'live', title: 'Live' },
    { key: 'photos', title: 'Photos' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'weather':
        return <WeatherTab />;
      case 'forecast':
        return <ForecastTab />;
      case 'live':
        return <LiveTab />;
      case 'photos':
        return <PhotosTab />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <View style={{ backgroundColor: '#65d1dc', }}>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#ff999d', height: 2 }}
              style={{ backgroundColor: "transparent", height: 50 }}
              renderLabel={(route) => (
                <View>
                  <Text style={styles.text}>
                    {route.title}
                  </Text>
                </View>
              )}
            />
          </View>
        )
        }
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConnexion} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
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
});
