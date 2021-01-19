import React from "react";
import { connect } from "react-redux";

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
            <span>Name: </span>{}
          </p>
          <p>
            <span>Email: </span>{}
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
const mapStateToProps = state => {
  return {
    user: state.userData
  };
};
export default connect(
  mapStateToProps,
  null
)(Profile);
