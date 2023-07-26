import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constuctor" + this.props.name);
    //create state variables here
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
    this.state = {
      test: {
        name: "TTTTTTTTTTT",
        location: "TTTT Location",
      },
    };
  }

  async componentDidMount() {
    //API CALLS
    console.log("Child Component Did Mount" + this.props.name);
    const data = await fetch("https://api.github.com/users/kushaalrana");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    console.log("Child Render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component </h1>
        <img src={this.state?.userInfo?.avatar_url} alt="" />
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h2>Location: {this.state?.userInfo?.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
