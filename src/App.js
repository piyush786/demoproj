import React from 'react';
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Main from './components/home/main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../src/redux/rootRedux'
import rootSaga from '../src/redux/rootSaga'


const  sagaMidleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMidleware))
sagaMidleware.run(rootSaga)


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Main} />
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
