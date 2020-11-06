import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navigation from './Navigation';

class BottomNavigation extends React.Component {
    constructor(props){
        super(props)
    }

    handlePress = (name) => {
        switch(name) {
            case 'HOME':
                this.props.navigation.navigate('Collections')
                break
            case 'ADD':
                console.log(name)
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
                         source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/type-logo.png')}
                         resizeMode="contain"
                         style={styles.homeButton}>
                        </Image>
                    </TouchableOpacity>

                     {/* ADD BUTTON */}
                    <TouchableOpacity
                      onPress={() => this.handlePress('ADD')}>
                    <Image
                      source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/add-button.png')}
                      resizeMode="contain"
                      style={styles.addButton}
                    ></Image>
                    </TouchableOpacity>

                     {/* PROFILE BUTTON */}
                    <TouchableOpacity
                     onPress={() => this.handlePress('PROFILE')}>
                    <Image
                      source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/profile-button.png')}
                      resizeMode="contain"
                      style={styles.profileButton}
                    ></Image>
                    </TouchableOpacity>

                  </View>
                </View>
          );
    }
}

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


export default BottomNavigation;