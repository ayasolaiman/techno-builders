import React from "react";

import "./Profile.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Profile props:", this.props);
  }

  render() {
    return (
      <div className="prof-container">
        <div className="prof-header">
          <img src="" alt="Profile image" />
        </div>
        <div className="prof-body">
          <h3>Account Details</h3>
          <p>
            <span>Name: </span>test name
          </p>
          <p>
            <span>Email: </span>test@mail.com
          </p>
          <p>
            <span>Birth date: </span>16 Jan 1994
          </p>
          <p>
            <span>Phone number: </span>01234567
          </p>
        </div>
        <button>Logout</button>
      </div>
    );
  }
}

export default Profile;
