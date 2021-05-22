import React, { Suspense, lazy } from "react";
import './App.scss';
import { useSelector } from 'react-redux';
import Navigation from "./shared/components/Navbar";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
var configData = require('./app.config.json')
const Home = lazy(() => import('./pages/Home'));
const ProuctList = lazy(() => import('./pages/ProductList'));

function App() {
  const counter = useSelector(state => state.counter);

  const pages = [
    {
      pageLink: "/",
      view: Home,
      displayName: "Home",
      animationDelayForNavbar: 0.2,
      showInNavbar: true
    }, {
      pageLink: "/products",
      view: ProuctList,
      displayName: "ProuctList",
      animationDelayForNavbar: 0.2,
      showInNavbar: true
    }

  ];

  /* return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={(e) => {
        dispatch(decrement())
      }} >-</button>
      <button onClick={(e) => {
        dispatch(increment())
      }}>+</button>

    </div>
  ); */
  return (
    <Router >
      <Suspense fallback={<div className="lazy"></div>}>
        <Route render={({ location }) => (
          <div >
            <Navigation
              title={configData.title}
              menu={configData.menu}
            />
            <Switch location={location}>
              {pages.map((page, index) => {
                return (
                  <Route
                    exact
                    path={page.pageLink}
                    render={

                      (props) => (
                        <page.view key={index} data={props} />
                      )}
                    key={index}
                  />
                );
              })}
              <Redirect to="/" />
            </Switch>
          </div>
        )} />
      </Suspense>
    </Router>);
}

export default App;
