import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './src/Components/Home'
import Collections from './src/Components/Collections';
import ViewCollection from './src//Components/ViewCollection';
import Profile from './src/Components/Profile'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Components/SplashScreen';
import PhotoUpload from './src/Components/PhotoUpload';
// import SplashScreen from './src/Components/SplashScreen';


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      splashScreen: true
    }
  }

  componentDidMount() {
    setTimeout(this.completeSplashScreen, 2400)
  }

  completeSplashScreen = () => {
    this.setState({
      splashScreen: false
    })
  }

  renderStack = () => {
    const user = this.props.user.id
    return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
          
          {
            
          user 
            
          ? 
            
          <Stack.Screen
          name="Collections"
          component={Collections}
          /> 
          
          : 
          
          <Stack.Screen
          name="Home"
          component={Home}
          />
          
          }

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

  render(){
    return (
    this.state.splashScreen ? <SplashScreen /> : this.renderStack()
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, null) (App);

