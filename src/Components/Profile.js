import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  SafeAreaView,
  Image
} from "react-native";

import BottomNavigation from './Navigation';
import { connect } from 'react-redux';
import { logoutSuccess } from '../Actions/auth';
import { clearCollections } from '../Actions/collections';
import { clearCollection } from '../Actions/collections';



class Profile extends React.Component {
    navigate = screen => props.navigationRef.current?.navigate(screen)

    constructor(props){
        super(props)
    }

    handleLogout = () => {
        // this.props.navigation.navigate('Auth')
        this.props.logoutSuccess()
        this.props.clearCollections()
        this.props.clearCollection()
    }

  render(){
      const username = `@${this.props.user.username}`
      const numCollections = `${this.props.user.collections.length} Collections`
    return (
            <View style={styles.container}>
                <Image
                source={require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/portrait-image.png')}
                resizeMode="cover"
                style={styles.image19}
                ></Image>
                    <TextInput
                    placeholder={username}
                    placeholderTextColor="rgba(0,0,0,1)"
                    style={styles.usernameField}
                    ></TextInput>
                        <Text 
                        style={styles.numCollections}>
                        {numCollections}
                        </Text>
                        <TouchableOpacity onPress={() => this.handleLogout()}>
                        <Text
                        style={styles.numCollections}>Logout</Text>
                        </TouchableOpacity>
            </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
  logoutSuccess,
  clearCollections,
  clearCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 700,
    bottom: 0,
    backgroundColor: greenliteColor
    },
    image19: {
    width: 102,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    marginTop: 114,
    marginLeft: 136
    },
    usernameField: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: "rgba(0,0,0,1)",
    height: 30,
    width: '100%',
    fontSize: 25,
    marginTop: 39,
    marginLeft: 0
    },
    numCollections: {
    fontFamily: 'Montserrat-Regular',
    color: "#121212",
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 0
    }
  });