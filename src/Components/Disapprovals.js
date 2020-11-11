import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

class Disapprovals extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            // <View style={styles.container}>
            // <View style={styles.disapprovalButtonImageStack}>
            // <Image
            // source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/disapprove-button.png')}
            // resizeMode="contain"
            // style={styles.disapprovalButtonImage}
            // ></Image>
            // <ImageBackground
            // source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/red-ellipse.png')}
            // resizeMode="contain"
            // style={styles.image3}
            // imageStyle={styles.image3_imageStyle}
            // >
            // <Text style={styles.loremIpsum}>{this.props.disapprovals}</Text>
            // </ImageBackground>
            // </View>
            // </View>
            // <View style={styles.container}>
    //   <View style={styles.disapproveContainer}>
        <View style={styles.disapprovalButtonImageStack}>
          <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/disapprove-button.png')}
            resizeMode="contain"
            style={styles.disapprovalButtonImage}
          ></Image>
          <ImageBackground
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/red-ellipse.png')}
            resizeMode="contain"
            style={styles.redEllipse}
            imageStyle={styles.redEllipse_imageStyle}
          >
            <Text style={styles.disapprovalCountText}>{this.props.disapprovals}</Text>
          </ImageBackground>
        </View>
    //   </View>
    // </View>
          );
    }
}

{/* <Text style={styles.disapprovalCount}>{this.props.disapprovals}</Text> */}

const styles = StyleSheet.create({
    container: {
      width: 150,
      height: 62
    },
    disapproveContainer: {
      width: 150,
      height: 62
    },
    disapprovalButtonImage: {
      top: 0,
      left: 0,
      width: 46,
      height: 45,
      position: "absolute"
    },
    redEllipse: {
      top: 8,
      left: 38,
      width: 30,
      height: 30,
      position: "absolute"
    },
    redEllipse_imageStyle: {},
    disapprovalCountText: {
    //   fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 7,
      marginLeft: 11
    },
    disapprovalButtonImageStack: {
      width: 68,
      height: 45,
      marginTop: 17,
      marginLeft: 12
    }
  });

export default Disapprovals;
