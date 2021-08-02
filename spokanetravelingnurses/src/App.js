import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { AdminHeader, Footer, VisitorHeader } from "./components/common";

import RenderHeader from "./components/common"

import { Amenities, Landing, Booking, TenantInfo, Rooms, Tour, Contact } from "./components/pages";
import { LogIn } from "./components/pages/LogIn";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100%", maxWidth: "96rem", margin: "0 auto" }}
    >
      <Switch>
        <Route path="/login" component={LogIn} exact />
      <Fragment>
        <VisitorHeader />
        <Route path="/" component={Landing} exact />
        <Route path="/amenities" component={Amenities} exact />
        <Route path="/tenantinfo" component={TenantInfo} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/tour" component={Tour} />
        <Route path="/contact" component={Contact} />
        <Route path="/booking" component={Booking} exact />
        <Route path="/explore" component={Landing} />
        <Footer />
      </Fragment>
      </Switch>
    </div>
  );
}

export default App;
