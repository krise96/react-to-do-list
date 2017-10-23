import React, { Component } from 'react';
import './styles/App.css';
import MainContainer from "./components/MainContainer";
import 'bootstrap/less/bootstrap.less'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <MainContainer />
      </Provider>
    );
  }
}
store.subscribe(() => {
  console.log('subscribe', store.getState());
});
export default App;
