import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from "./../styles/styles";

const defaultProps = {
    lat: "" ,
    lng: "",
    title: ""
}
export default class MapViewContainer extends Component<Props> {
  render() {
    const {lat, lng, title} = this.props;
    return (
      <View style ={styles.container}>
        { (lat !== "" && lng !== "") ?
          <MapView
            style={styles.map}
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0900,
              longitudeDelta: 0.0500,
            }}>
            <Marker
              coordinate={{
                  latitude: lat,
                  longitude: lng
              }}
              title={title}/>
          </MapView>
          :
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
     </View>
    );
  }
}

MapViewContainer.defaultProps = defaultProps;
