import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { routeCodes } from "constants/routes";
import Menu from "components/global/Menu";
import Dashboard from "views/Dashboard";
import Invoice from "views/Invoice";
import People from "views/People";
import NotFound from "views/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />

        <div className="Page">
          <Switch>
            <Route exact path={routeCodes.DASHBOARD} component={Dashboard} />
            <Route path={routeCodes.PEOPLE} component={People} />
            <Route path={routeCodes.INVOICES} component={Invoice} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
