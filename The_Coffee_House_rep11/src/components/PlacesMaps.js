import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
const locations = [
  { title: 'Location A', latitude: 37.78825, longitude: -122.4325 },
  { title: 'Location B', latitude: 37.75825, longitude: -122.4624 },
  { title: 'Location C', latitude: 37.73629, longitude: -122.4834 },
  { title: 'Location D', latitude: 37.72835, longitude: -122.3744 },
  { title: 'Location E', latitude: 37.73845, longitude: -122.3654 },
  { title: 'Location F', latitude: 37.74855, longitude: -122.4564 },
  { title: 'Location BG', latitude: 37.77865, longitude: -122.43674 }
]
const PlacesMaps = () => {
  const navigation = useNavigation();
  return (
    <View>
      <MapView
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((e, i) => (
          <Marker
            key={i}
            title={e.title}
            // image={flagPinkImg}
            key={e.title}
            coordinate={{ latitude: e.latitude, longitude: e.longitude }}
          >
            <TouchableOpacity>
              <Image source={{ uri: 'https://raw.githubusercontent.com/hungdev/IntegrateMapAndCamera/master/src/marker.png' }} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', right: 10, top: 10 }}>
        <Ionicons name="close-circle" size={40} style={{ color: 'black' }} />
      </TouchableOpacity>
    </View>
  )
}

export default PlacesMaps
