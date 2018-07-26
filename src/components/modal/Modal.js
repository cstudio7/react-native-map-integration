import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, NativeModules} from 'react-native';

const { RNRestart } = NativeModules;

export const showModal = (errorMessage) => {
    Alert.alert(
    'Alert!',
    errorMessage,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Reload', onPress: () => RNRestart.Restart()},
    ],
    { cancelable: false }
  );
}
