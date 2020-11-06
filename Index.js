import * as React from 'react';
import { createStore } from 'redux';
import allReducers from './src/Reducers';
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class Index extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
          <Provider store={store}>
                <App />
            </Provider>
    );
  }
}

export default Index;