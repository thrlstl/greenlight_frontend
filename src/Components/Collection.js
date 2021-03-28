import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import moment from 'moment';
import placeholderImage from '../assets/images/PlaceholderImage.png'

import API from './API'
const apiURL = API()


function Collection(props) {
    const collectionName = props.name 
    const collectionLocation = props.location 
    const date = moment(props.created_at).fromNow();
    const photos = props.photos

    const coverPhoto = () => {
      return photos.length > 0 ? {uri: `${apiURL}${randomPhoto()}`} :
      placeholderImage
    }

    const randomPhoto = () => {
      return photos[Math.floor(Math.random() * photos.length)].photo
    }

    const handleChangeCollectionName = () => {
      console.log('changing')
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.collectionContainerStack}>
          <View style={styles.collectionContainer}>
              <TextInput
              onTouchStart={()=>  alert("Hello...")}
              placeholder={`${collectionName}`}
              onChangeText={(text) => handleChangeCollectionName(text)}
              placeholderTextColor="rgba(0,0,0,1)"
              clearTextOnFocus={true}
              keyboardAppearance="dark"
              style={styles.collectionName2}
              ></TextInput>
          </View>
            <ImageBackground
              source={coverPhoto()}
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
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginTop: 1
  },
  collectionContainer: {
    height: 219,
    position: "absolute",
    backgroundColor: 'white',
    width: 375,
    // borderWidth: 1,
    borderColor: 'black',
    borderBottomWidth: 3,
    borderTopWidth: 3
  },
  collectionName2: {
    fontFamily: 'Montserrat-SemiBold',
    color: "#121212",
    textAlign: "center",
    fontSize: 25,
    marginTop: 93,
    marginLeft: 1,
    marginRight: 1
  },
  image18: {
    top: 0,
    left: 0,
    width: '100%',
    height: 218,
    position: "absolute"
  },
  image18_imageStyle: {
    opacity: 0.25
  },
  locationText: {
    // width: '100%',
    fontFamily: 'Montserrat-Regular',
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
    fontFamily: 'Montserrat-Regular',
    color: "#121212",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 1,
    marginRight: 3
  }
});

export default Collection;