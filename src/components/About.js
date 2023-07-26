import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - Component Did Mount");
    // Best place to make API calls
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <Outlet />
        <ProfileClass name={"First Child"} />
        <ProfileClass name={"Second Child"} />
        <Profile name={"Kushaal"} />
        <p>Learning react in the super fast wayy</p>
      </div>
    );
  }
}
export default About;
