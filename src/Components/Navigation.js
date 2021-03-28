import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { selectCollection } from '../Actions/collections';
import { loadCollections } from '../Actions/collections';

import API from './API'
const apiURL = API()

function BottomNavigation(props) {

    const dispatch = useDispatch()
    const navigate = screen => props.navigationRef.current?.navigate(screen)
    const user = useSelector(state => state.user)

    const [collectionData, setCollectionData] = useState({
      name: 'collection',
      location: 'location',
      user_id: user.id
    })
    
    //move this function to the photo upload component
    const createCollection = () => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(collectionData)
      }
      fetch(`${apiURL}collections`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        dispatch(selectCollection(data))
      })
    }

    const refreshCollections = () => {
      fetch(`${apiURL}users/${user.id}`)
      .then(resp => resp.json())
      .then(user => {
        dispatch(loadCollections(user.collections))
      })
    }

    const handlePress = (button, screen) => {
        switch(button) {
            case 'HOME':
                refreshCollections()
                navigate(screen)
                break
            case 'ADD':
                createCollection()
                navigate(screen)
                break
            case 'PROFILE':
                navigate(screen)
                break
        }
    }

    function HomeButton() {
      return(
        <TouchableOpacity
          onPress={() => handlePress('HOME', 'Collections')}>
          <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/home-button.png')}
            resizeMode="contain"
            style={styles.homeButton}>
          </Image>
        </TouchableOpacity>
      )
    }

    function AddButton() {
      return(
        <TouchableOpacity
          onPress={() => handlePress('ADD', 'Photo Upload')}>
          <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/add-button-2.png')}
            resizeMode="contain"
            style={styles.addButton}>
          </Image>
        </TouchableOpacity>
      )
    }

    function ProfileButton() {
      return(
        <TouchableOpacity
          onPress={() => handlePress('PROFILE', 'Profile')}>
          <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/profile-button-2.png')}
            resizeMode="contain"
            style={styles.profileButton}>
          </Image>
        </TouchableOpacity>
      )
    }

    return (
            <View style={styles.navigationContainer}>
              <View style={styles.buttonsContainer}>
                <HomeButton />
                <AddButton />
                <ProfileButton />
              </View>
            </View>
      );
    }

export default BottomNavigation;

// STYLES
// Designed with BuilderX by Matthew Steele.

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