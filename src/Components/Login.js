import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import { useDispatch } from "react-redux";
import { loadCollections } from '../Actions/collections.js'
import { loginSuccess } from '../Actions/auth.js';


// Dynamic API URL — Adjusted for Development or Production.
import API from './API'
const apiURL = API()

function Login() {

    const [formData, setFormData] = useState({
      username: '',
      password: '',
      error: null
    })

    const dispatch = useDispatch()

    useEffect(() => {
      renderErrorMessages()
    }, [formData.error])

    const handleChange = (text, field) => {
      setFormData({ ...formData, [field]: text })
    }

    const handleSubmit = () => {
        const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:  JSON.stringify(formData)
        }
        fetch(`${apiURL}auth`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          data.error
          ? setFormData({ ...formData, error: data.error })
          : dispatch(loadCollections(data.collections))
            dispatch(loginSuccess(data))
        })
    }

    const renderErrorMessages = () => {
      return formData.error
            ? <View>
                <Text style={{color: 'red'}}>{formData.error}</Text>
              </View>
            : null
    }

  return (
    <View style={styles.container}>
        <View>
            {
            formData.error 
            ? <Text style={{color: 'red'}}>{formData.error}</Text>
            : null
            }
        </View>
      <TextInput
        placeholder="USERNAME"
        onChangeText={(text) => handleChange(text, 'username')}
        placeholderTextColor='black'
        clearTextOnFocus={true}
        keyboardAppearance="dark"
        style={styles.username}
      ></TextInput>
      <TextInput
        placeholder="PASSWORD"
        onChangeText={(text) => handleChange(text, 'password')}
        placeholderTextColor='black'
        clearTextOnFocus={true}
        keyboardAppearance="dark"
        secureTextEntry={true}
        style={styles.password}
        ></TextInput>
          <View style={styles.loginSubmit}>
            <TouchableOpacity 
              onPress={handleSubmit}
              style={styles.button}>
              <Text style={styles.login2}>LOGIN</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

export default Login;

// STYLES
// Designed with BuilderX by Matthew Steele.

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