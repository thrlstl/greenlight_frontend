import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/bulb.gif')} style={{width: '100%', height: '100%'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
});
