import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld'
import {Provider} from 'react-redux';
import store from './store'
const App = ()=>{
  return(
    <Provider store = {store}>
      <HelloWorld/>
    </Provider>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
