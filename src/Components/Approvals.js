import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

class Approvals extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            // <View style={styles.container}>
            // <View style={styles.approveContainer}>
            <View style={styles.approvalButtonImageStack}>
            <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/heart-button.png')}
            resizeMode="contain"
            style={styles.approvalButtonImage}
            ></Image>
            <ImageBackground
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/green-ellipse.png')}
            resizeMode="contain"
            style={styles.greenEllipse}
            imageStyle={styles.greenEllipse_imageStyle}
            >
            <Text style={styles.approvalCountText}>{this.props.approvals}</Text>
            </ImageBackground>
            </View>
            // </View>
            // </View>
          );
    }
}

export default Approvals;

const styles = StyleSheet.create({
    container: {
    width: 150,
    height: 62
    },
    approveContainer: {
      width: 150,
      height: 62
    },
    approvalButtonImage: {
      top: 0,
      left: 23,
      width: 46,
      height: 45,
      position: "absolute"
    },
    greenEllipse: {
      left: 0,
      width: 30,
      height: 30,
      position: "absolute",
      top: 8
    },
    greenEllipse_imageStyle: {},
    approvalCountText: {
    //   fontFamily: "robzoto-regular",
      color: "#121212",
      marginTop: 7,
      marginLeft: 11
    },
    approvalButtonImageStack: {
      width: 69,
      height: 45,
      marginTop: 17,
      marginLeft: 280
    }
  });