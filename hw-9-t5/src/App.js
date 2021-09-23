import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Nav";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { withSuspense } from "./withSuspense";
// import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' 
          render={withSuspense(Profile)}
          />
          <Route path='/dialogs' render={withSuspense(Dialogs)}/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
