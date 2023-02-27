import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Alchemy} from './components';
import { SignIn } from './components/SignIn';
import './style.css';
import {firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';




let myTitle = "Welcome to the Daedric Library!!!"

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
      <Router>
        
        <Switch>
          
          <Route exact path="/" component={Home}>
            <Home  title= {myTitle} />
          </Route>
          
          <Route path= '/about' component={About}>
            <About></About>
          </Route>
          
          <Route path= '/library' component={Alchemy}>
            <Alchemy></Alchemy>
          </Route>
        
          <Route path= '/signin'>
            <SignIn></SignIn>
          </Route>
        
        </Switch>
      
      </Router>
    </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);