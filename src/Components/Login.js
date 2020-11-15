import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import { connect } from 'react-redux';
import { loadCollections } from '../Actions/collections.js'
import { loginSuccess } from '../Actions/auth.js';
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

handleChangeUsername = (text) => {
  this.setState({ username: text })
}

handleChangePassword = (text) => {
  this.setState({ password: text })
}

handleSubmit = () => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.loadCollections(data.collections)
        this.props.loginSuccess(data)
      }
    })
}
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="USERNAME"
          onChangeText={(text) => this.handleChangeUsername(text)}
          placeholderTextColor='black'
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          style={styles.username}
        ></TextInput>
        <TextInput
          placeholder="PASSWORD"
          onChangeText={(text) => this.handleChangePassword(text)}
          placeholderTextColor='black'
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          secureTextEntry={true}
          style={styles.password}
        ></TextInput>
        <View style={styles.loginSubmit}>
          <TouchableOpacity 
            onPress={this.handleSubmit}
            style={styles.button}>
            <Text style={styles.login2}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess,
  loadCollections
}

const styles = StyleSheet.create({
  container: {
    width: 252,
    height: 55
  },
  loginOrSignupView1: {
    width: 375,
    height: 406,
    backgroundColor: "#a9ffda",
    marginTop: -93,
    marginLeft: -61
  },
  username: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    textAlign: "center",
    fontSize: 15,
    width: 252,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    // shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 93,
    marginLeft: 61
  },
  password: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    textAlign: "center",
    fontSize: 15,
    width: 252,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    // shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 14,
    marginLeft: 61
  },
  loginSubmit: {
    width: 85,
    height: 36,
    marginTop: 31,
    marginLeft: 144
  },
  button: {
    width: 85,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
    },
  login2: {
    fontFamily: 'Montserrat-SemiBold',
    color: "black",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 8
  }
});

export default connect(null, mapDispatchToProps)(Login)
