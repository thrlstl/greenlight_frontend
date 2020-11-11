import React, { Component } from "react";
import { Keyboard, TouchableWithoutFeedback, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Login from '../Components/Login';
import Signup from '../Components/Signup';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'login'
    }
  }

  // handlePress = () => {
  //   const clicked = !this.state.clicked
  //   if (this.state.clicked === false) {
  //     this.setState({
  //       clicked: clicked,
  //       title: 'Login'
  //     })
  //   }
  //   else {
  //     this.setState({
  //       clicked: clicked,
  //       title: 'Sign Up'
  //     })
  //   }
  // }

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
      // <KeyboardAvoidingView
      //           behavior={Platform.OS === "ios" ? "padding" : null}
      //           style={{ flex: 1 }}
      //       >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View
                gradientImage="Gradient_eRV1whX.png"
                style={styles.loginOrSignupView}
              ></View>
            {/* <Image source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/bulb.gif')} style={{width: '100%', height: '100%'}} /> */}
            <Image
              source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/type-logo.png')}
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
            <View>
              {this.renderLoginOrSignUp()}
            </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
    );
  }
}

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end'
  },  loginOrSignupView: {
    width: 375,
    height: 406,
    backgroundColor: "#a9ffda",
    marginTop: 406
  },
  logo: {
    width: 160,
    height: 155,
    marginTop: -698,
    marginLeft: 107
  },
  loginSignupMenu: {
    width: 188,
    height: 50,
    flexDirection: "row",
    marginTop: 87
  },
  loginButton: {
    width: 188,
    height: 50,
    backgroundColor: "rgba(201,255,233,1)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,1)",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  loginText: {
    // fontFamily: "roboto-regular",
    zIndex: 1,
    color: "#121212",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 65
  },
  signupButton: {
    width: 188,
    height: 50,
    backgroundColor: "rgba(201,255,233,1)",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,1)",
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  signupText: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 55
  },
  loginButtonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: -188
  }
});

export default Home;
