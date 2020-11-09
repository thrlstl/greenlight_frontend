import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";
import moment from 'moment';
import { connect } from 'react-redux';

function Collection(props) {
    const collectionName = props.name 
    const collectionLocation = props.location 
    // const URL = `http://localhost:3001${storageURL}`
    const date = moment(props.created_at).startOf('hour').fromNow();

    const URL = () => {
      if (props.photos.length) {
        return `http://localhost:3001${props.photos[0].photo}` 
      }
      else {
        return '/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/portrait-image.png'
      }
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.collectionContainerStack}>
          <TouchableOpacity style={styles.collectionContainer}>
            <Text style={styles.collectionName2}>{collectionName}</Text>
          </TouchableOpacity>
          <ImageBackground
            source={{uri: URL()}}
            resizeMode="cover"
            style={styles.image18}
            imageStyle={styles.image18_imageStyle}
          >
            <Text style={styles.locationText}>{collectionLocation}</Text>
          </ImageBackground>
        </View>
        <Text style={styles.date}>{date}</Text>
      </TouchableOpacity>
    </View>
  );
}

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
  container: {
    top: 50,
    width: 375,
    height: 265
  },
  button: {
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.52,
    shadowRadius: 10,
    marginTop: 1
  },
  collectionContainer: {
    height: 219,
    position: "absolute",
    backgroundColor: 'white',
    width: 375,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderBottomWidth: 3,
    borderTopWidth: 3
  },
  collectionName2: {
    // fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 25,
    marginTop: 93,
    marginLeft: 1,
    marginRight: 1
  },
  image18: {
    top: 4,
    left: 1,
    width: 375,
    height: 210,
    position: "absolute"
  },
  image18_imageStyle: {
    opacity: 0.25
  },
  locationText: {
    // fontFamily: "roboto-italic",
    color: "#121212",
    textAlign: "center",
    width: 369,
    height: 16,
    marginTop: 125,
    marginRight: 6
  },
  collectionContainerStack: {
    width: 376,
    height: 219,
    marginTop: 1
  },
  date: {
    // fontFamily: "roboto-italic",
    color: "#121212",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 1,
    marginRight: 3
  }
});

export default Collection;