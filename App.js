import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/Home'
import Collections from './src/Components/Collections';
import ViewCollection from './src//Components/ViewCollection';
import Profile from './src/Components/Profile'
import SplashScreen from './src/Components/SplashScreen';
import PhotoUpload from './src/Components/PhotoUpload';

function App(props) {
  
  const Stack = createStackNavigator();
  const user = props.user
  const [loggedIn, setLoggedIn] = useState(false)
  const [splashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 2400)
  }, [])

  useEffect(() => {
    setLoggedIn(() => {
      return user.id ? true : false
    })
  }, [user])

  const renderStack = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
            headerShown: false
            }}>
              
          { loggedIn 

          ?   <Stack.Screen
              name="Collections"
              component={Collections}
              />
              
          :  <Stack.Screen
              name='Home'
              component={Home}
              />  }

              <Stack.Screen
              name='View Collection'
              component={ViewCollection}
              />

              <Stack.Screen
              name='Profile'
              component={Profile}
              />

              <Stack.Screen
              name='Photo Upload'
              component={PhotoUpload}
              />

            </Stack.Navigator>
        </NavigationContainer>
      )
  }

    return (
      splashScreen 
      ? <SplashScreen /> 
      : renderStack()
    );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, null) (App);

