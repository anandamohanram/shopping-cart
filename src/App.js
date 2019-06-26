import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { NavBar } from './component';
import './App.css';
import Routes from './router/Routes';
import store from './store/store'

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
