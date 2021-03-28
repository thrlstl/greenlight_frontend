import React, {  useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/Components/Auth'
import Collections from './src/Components/Collections';
import ViewCollection from './src//Components/ViewCollection';
import Profile from './src/Components/Profile'
import SplashScreen from './src/Components/SplashScreen';
import PhotoUpload from './src/Components/PhotoUpload';
import BottomNavigation from './src/Components/Navigation'

function App() {
  
  const Stack = createStackNavigator()
  const navigationRef = React.createRef();
  const [loggedIn, setLoggedIn] = useState(false)
  const [splashScreen, setSplashScreen] = useState(true)
  const user = useSelector(state => state.user)

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

  function HomeStack() {
    return(
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='Collections' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Collections' component={Collections}/>
          <Stack.Screen name='View Collection' component={ViewCollection}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Photo Upload' component={PhotoUpload}/>
        </Stack.Navigator>
          <BottomNavigation navigationRef={navigationRef}/>
      </NavigationContainer>
    )
  }
    return (
      splashScreen 
      ? <SplashScreen />
      : ( !loggedIn
      ? <Auth />
      : <HomeStack /> ) 
    );
}

export default App;


