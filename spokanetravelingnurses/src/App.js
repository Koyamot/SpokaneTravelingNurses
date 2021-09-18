import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import SecureRoute from "./components/api/SecureRoute";
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  AdminHeader,
  Footer,
  VisitorHeader,
  SingleRoom,
} from "./components/common";
import RenderHeader from "./components/common";
import {
  Amenities,
  Landing,
  Booking,
  TenantInfo,
  RoomList,
  Tour,
  Contact,
  Admin,
} from "./components/pages";
import { LogIn } from "./components/pages/LogIn";

import { rooms } from "./components/pages/Rooms/roomData";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  
  const link = createHttpLink({
    uri: `${backendUrl}/graphql`,
    credentials: 'same-origin'
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });

  return (
    <div
      className="App"
      style={{ width: "100%", maxWidth: "96rem", margin: "0 auto" }}
    >
      <ApolloProvider client={client}>
      <Switch>
        <Route path="/login" component={LogIn} exact />
        <SecureRoute path="/admin" component={Admin} />
        <Fragment>
          <VisitorHeader />
          <Route path="/" component={Landing} exact />
          <Route path="/amenities" component={Amenities} exact />
          <Route path="/tenantinfo" component={TenantInfo} />
          <Route path="/rooms" render={() => <RoomList rooms={rooms[1].roomInfo} />} />
          <Route path="/room/:id">
            <SingleRoom amenities={rooms[0].room}/>
          </Route>
          <Route path="/tour" component={Tour} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" component={Booking} exact />
          <Route path="/explore" component={Landing} />
          <Footer />
        </Fragment>
      </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
