import 'react-native-gesture-handler';
import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './src/Components/Home'
import Collections from './src/Components/Collections';
import ViewCollection from './src//Components/ViewCollection';
import Profile from './src/Components/Profile'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Components/SplashScreen';


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  changeLoading = () => {
    this.setState({
      isLoading: false
    })
  }

  componentDidMount() {
    setTimeout(this.changeLoading, 400)
  }

  render(){
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

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, null) (App);

