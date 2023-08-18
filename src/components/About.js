import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import userContext from "../utils/userContext";
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
        <userContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </userContext.Consumer>
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
