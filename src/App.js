import React, { Suspense, lazy, useEffect } from "react";
import './App.theme.scss';
import './custom.theme.scss';
import { useSelector } from 'react-redux';
import Header from "./shared/components/Header";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
let configData = require('./app.config.json');
const About = lazy(() => import('./pages/About'));
const ProuctList = lazy(() => import('./pages/ProductList'));
let stickHeader = false;
const App = () => {
  const counter = useSelector(state => state.counter);

  const pages = [
    {
      pageLink: "/products",
      view: ProuctList,
      displayName: "ProuctList",
      animationDelayForNavbar: 0.2,
      showInNavbar: true
    }, {
      pageLink: "/about",
      view: About,
      displayName: "About",
      animationDelayForNavbar: 0.2,
      showInNavbar: true
    }

  ];



  return (
    <Router >
      <Suspense fallback={<div className="lazy"></div>}>
        <Route render={({ location }) => (
          <React.Fragment >
            <Header

              title={configData.title}
              menu={configData.menu}
              social={configData.socialLinks}
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
          </React.Fragment>
        )} />
      </Suspense>
    </Router>);
}

export default App;
