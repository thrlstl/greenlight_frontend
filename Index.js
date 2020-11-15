import React from 'react';
import { createStore } from 'redux';
import allReducers from './src/Reducers';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import App from './App'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class Index extends React.Component {
  constructor(){
    super()
  }

  componentDidMount() {
    Font.loadAsync({
      'Montserrat-SemiBold': require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/fonts/Montserrat-SemiBold.otf'),
      'Montserrat-Regular': require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/fonts/Montserrat-Regular.otf'),
    });
  }

  render(){
    console.disableYellowBox = true;
    // LogBox.ignoreAllLogs(value)
    return (
          <Provider store={store}>
                <App />
          </Provider>
    );
  }
}

export default Index;