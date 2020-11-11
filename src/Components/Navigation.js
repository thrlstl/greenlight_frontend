import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, SafeAreaView } from "react-native";
import Navigation from './Navigation';
import { connect } from 'react-redux';
import { selectCollection } from '../Actions/collections';
import * as ImagePicker from 'expo-image-picker';


class BottomNavigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          location: '',
          user_id: this.props.user.id
        }
    }

    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
        exif: true
      });
      // console.log(result)
      var formData = new FormData();
        // var blob = new Blob([photoData], { type: 'photo'});
        // Uint8ClampedArray.from()

        formData.append('photo', result);
        formData.append('collection_id', this.props.collection.id);
        formData.append('original_filename', result.uri)
        console.log(formData)

        fetch(`http://localhost:3001/photos`, {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }
    createCollection = () => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(this.state)
      }
  
      fetch('http://localhost:3001/collections', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.selectCollection(data)
        this.pickImage()
      })
    }

    handlePress = (name) => {
        switch(name) {
            case 'HOME':
                this.props.navigation.navigate('Collections')
                break
            case 'ADD':
                this.createCollection()
                // this.props.navigation.navigate('Photo Upload')
                break
            case 'PROFILE':
                this.props.navigation.navigate('Profile')
                break
        }
    }
    
    render(){
        return (
                <View style={styles.navigationContainer}>
                  <View style={styles.buttonsContainer}>

                    {/* HOME BUTTON */}
                    <TouchableOpacity
                      onPress={() => this.handlePress('HOME')}>
                        <Image
                         source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/home-button.png')}
                         resizeMode="contain"
                         style={styles.homeButton}>
                        </Image>
                    </TouchableOpacity>

                     {/* ADD BUTTON */}
                    <TouchableOpacity
                      onPress={() => this.handlePress('ADD')}>
                    <Image
                      source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/add-button-2.png')}
                      resizeMode="contain"
                      style={styles.addButton}
                    ></Image>
                    </TouchableOpacity>

                     {/* PROFILE BUTTON */}
                    <TouchableOpacity
                     onPress={() => this.handlePress('PROFILE')}>
                    <Image
                      source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/profile-button-2.png')}
                      resizeMode="contain"
                      style={styles.profileButton}
                    ></Image>
                    </TouchableOpacity>

                  </View>
                </View>
          );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      collection: state.collection
  }
}

const mapDispatchToProps = {
  selectCollection
}

export default connect(mapStateToProps, mapDispatchToProps) (BottomNavigation)

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 600
  },
  navigationContainer: {
    top: 696,
    left: 0,
    width: 376,
    height: 118,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 7,
    flexDirection: "row"
  },
  homeButton: {
    width: 72,
    height: 69,
    marginTop: 1
  },
  addButton: {
    width: 72,
    height: 69,
    marginLeft: 23
  },
  profileButton: {
    width: 72,
    height: 69,
    marginLeft: 19
  },
  buttonsContainer: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    marginRight: 58,
    marginLeft: 60,
    marginTop: 15
  }
});