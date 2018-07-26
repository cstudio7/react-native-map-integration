import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import MapViewContainer from "./components/MapViewContainer";
import {showModal} from "./components/modal/Modal";
import {fetchGoogleApi} from "./services/api";

import styles from "./styles/styles";

export default class Main extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: "",
            address: ""
        }
    }

    componentDidMount() {
        this._fetchCurrentPosition();
    }

    _fetchCurrentPosition = () => {
        try {
          navigator.geolocation.getCurrentPosition(position => {
              if(position.hasOwnProperty("coords")) {
                  fetchGoogleApi(position.coords.latitude, position.coords.longitude).then((response) => {
                      this.setState({
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                          address: response.results[0].formatted_address
                      });
                  }).catch((error) => {
                      showModal(error);
                      this.setState({
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                      });
                  });
              }
          }, error => {
            showModal(error.message);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 });
        } catch (e) {
            showModal(e.message);
        }
    }

    render() {
      return (
        <View style ={styles.container}>
            <StatusBar backgroundColor="#0000ff" barStyle="light-content"/>
            <MapViewContainer lat={this.state.lat} lng={this.state.lng} title={this.state.address} />
       </View>
      );
    }
}
