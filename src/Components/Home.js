import React, { Component } from "react";
import { Keyboard, TouchableWithoutFeedback, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import Login from '../Components/Login';
import Signup from '../Components/Signup';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'login'
    }
  }

  renderLoginOrSignUp = () => {
    if (this.state.view === 'login') {
      return (
        <Login />
      )
    }
    else {
      return (
        <Signup />
      )
    }
  }

  handlePressLogin = () => {
    this.setState({
      view: 'login'
    })
  }

  handlePressSignup = () => {
    this.setState({
      view: 'signup'
    })
  }

  render(){
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View
                gradientImage="Gradient_eRV1whX.png"
                style={styles.loginOrSignupView}
              ></View>
            <Image
              source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/login.gif')}
              resizeMode="contain"
              style={styles.logo}
            ></Image>
            <View style={styles.loginSignupMenu}>
              <View style={styles.loginButtonRow}>
                <TouchableOpacity onPress={this.handlePressLogin} style={styles.loginButton}>
                  <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePressSignup} style={styles.signupButton}>
                  <Text style={styles.signupText}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.loginOrSignupContainer}>
              {this.renderLoginOrSignUp()}
            </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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

export default Home;
