import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { signupSuccess } from '../Actions/auth.js'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            error: null
        }
    }

handleChangeFirstName = (text) => {
    this.setState({ first_name: text })
}

handleChangeLastName = (text) => {
    this.setState({ last_name: text })
}

handleChangeEmail = (text) => {
    this.setState({ email: text })
  }
  
handleChangeUsername = (text) => {
    this.setState({ username: text })
}

handleChangePassword = (text) => {
    this.setState({ password: text })
}

handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/users', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.signupSuccess(data)
        
        // this.props.history.push('/dashboard')

        // update our store with the user
        // redirect to the dashboard page
      }
    })
}

  render(){
    return (
      <View style={styles.container}>
                <View>
                  {
                  this.state.error &&
                  <Text style={{color: 'red'}}>{this.state.error}</Text>
                  }
                </View>
          <TextInput
          placeholder="FIRST NAME"
          onChangeText={this.handleChangeFirstName}
          placeholderTextColor="rgba(0,0,0,1)"
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          style={styles.firstName}
          ></TextInput>
          <TextInput
          placeholder="LAST NAME"
          onChangeText={this.handleChangeLastName}
          placeholderTextColor="rgba(0,0,0,1)"
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          style={styles.lastName}
          ></TextInput>
          <TextInput
          placeholder="EMAIL ADDRESS"
          onChangeText={this.handleChangeEmail}
          placeholderTextColor="rgba(0,0,0,1)"
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          keyboardType="email-address"
          style={styles.emailAddress}
          ></TextInput>
          <TextInput
          placeholder="USERNAME"
          onChangeText={this.handleChangeUsername}
          placeholderTextColor="rgba(0,0,0,1)"
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          style={styles.username}
          ></TextInput>
          <TextInput
          placeholder="PASSWORD"
          onChangeText={this.handleChangePassword}
          placeholderTextColor="rgba(0,0,0,1)"
          clearTextOnFocus={true}
          keyboardAppearance="dark"
          secureTextEntry={true}
          style={styles.password}
          ></TextInput>
              <View style={styles.signupSubmit}>
                <TouchableOpacity 
                  onPress={(e) => this.handleSubmit(e)}
                  style={styles.button}
                  >
                  <Text style={styles.signupButtonText}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  signupSuccess
}

const styles = StyleSheet.create({
  container: {
    width: 245,
    height: 35
  },
  firstName: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 20,
    width: 245,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 49,
    marginLeft: 65
  },
  lastName: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 20,
    width: 245,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 11,
    marginLeft: 65
  },
  emailAddress: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 20,
    width: 245,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 12,
    marginLeft: 65
  },
  username: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 20,
    width: 245,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 26,
    marginLeft: 65
  },
  password: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 20,
    width: 245,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    letterSpacing: 5,
    marginTop: 11,
    marginLeft: 65
  },
  signupSubmit: {
    width: 85,
    height: 36,
    marginTop: 29,
    marginLeft: 145
  },
  button: {
    width: 85,
    height: 36,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,1)"
  },
  signupButtonText: {
    // fontFamily: "roboto-700",
    color: "black",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 8
  }
});


export default connect(null, mapDispatchToProps)(Signup)