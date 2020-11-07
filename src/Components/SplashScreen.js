import * as React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Button,
    SafeAreaView,
    Image,
    TouchableHighlight
  } from "react-native";

import Video from 'react-native-video';

class SplashScreen extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
        <View>
             <Video source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/heart-bulb.mp4')}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
        // onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo} />
        </View>
    );
  }
}

export default SplashScreen;

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });