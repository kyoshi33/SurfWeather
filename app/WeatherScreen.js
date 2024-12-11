import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

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

export default function WeatherScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'weather', title: 'Weather' },
    { key: 'forecast', title: 'Forecast' },
    { key: 'live', title: 'Live' },
    { key: 'photos', title: 'Photos' },
  ]);


  const renderScene = SceneMap({
    weather: WeatherTab,
    forecast: ForecastTab,
    live: LiveTab,
    photos: PhotosTab,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'blue' }}
          style={{ backgroundColor: 'white' }}
          labelStyle={{ color: 'black' }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
});