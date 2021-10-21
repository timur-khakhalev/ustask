import React from 'react';
import Profile from './Pages/Profile'
import Main from './Pages/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/ustask/">
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/profile/">
          <Profile/>
        </Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
