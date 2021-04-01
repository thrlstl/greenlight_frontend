import React, { useState, useEffect } from "react";
import { Keyboard, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import Login from './Login';
import Signup from './Signup';

function Auth() {

  const [toggle, setToggle] = useState(true)
  const buttonPressedColor = 'rgba(255, 255, 255, 0.30)'
  const buttonNotPressedColor = 'rgba(255, 255, 255, 0.2)'

  const backgroundColor = (name) => {
    return name === toggle
    ? buttonPressedColor
    : buttonNotPressedColor
  }

  const renderLoginOrSignup = () => {
    return toggle === 'login' 
    ? <Login />
    : <Signup />
  }

  const handlePress = (name) => {
    setToggle(name)
  }

  function Toggle() {
    return(
      <View style={styles.loginSignupMenu}>
        <View style={styles.loginButtonRow}>
          <TouchableOpacity onPress={() => handlePress('login')} style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('signup')} style={styles.signupButton}>
            <Text style={styles.signupText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  loginOrSignupView: {
    width: 375,
    height: 406,
    backgroundColor: '#c6f9d7',
    marginTop: 406
  },
  logo: {
    width: '100%',
    height: '100%',
    marginTop: -890,
    marginLeft: 0
  },
  loginSignupMenu: {
    width: 188,
    height: 50,
    flexDirection: "row",
    marginTop: -350
  },
  loginButton: {
    width: 188,
    height: 50,
    backgroundColor: backgroundColor('login'),
    borderWidth: 0,
    borderColor: 'white',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2
  },
  loginText: {
    fontFamily: 'Montserrat-SemiBold',
    zIndex: 1,
    color: 'white',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 65
  },
  signupButton: {
    width: 188,
    height: 50,
    backgroundColor: backgroundColor('signup'),
    borderWidth: 2,
    borderColor: 'white',
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  signupText: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 55
  },
  loginButtonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: -188
  },
  loginOrSignupContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c6f9d7'
  }
});

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View
            gradientImage="Gradient_eRV1whX.png"
            style={styles.loginOrSignupView}></View>
          <Image
            source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/login.gif')}
            resizeMode="contain"
            style={styles.logo}>
          </Image>
          <Toggle />
          <View style={styles.loginOrSignupContainer}>
            {renderLoginOrSignup()}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }

// STYLES
// Designed with BuilderX by Matthew Steele.

export default Auth;
