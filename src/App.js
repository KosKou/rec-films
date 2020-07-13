import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from "./assets/routes";
import Home from "./views/Landing/Home";

const loading = () =>
    <div className="animated fadeIn pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>;


function App() {
  return (
      <BrowserRouter>
        <Switch>
          {/*{routes.map((route, idx) => {
            return route.component ? (
                <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                roles={route.roles}
                render={props => (
                  <route.component {...props} />
                )}/>
            ) : (null);
          })}*/}
            <Route path="/" name="Home" component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
