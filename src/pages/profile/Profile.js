import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestLogout } from "../../store/user/actions";

import "./Profile.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: true
    };
  }

  componentDidMount() {}

  render() {
    const userData = this.props.user;
    const { history, location } = this.props;
    console.log("User Data:", userData);

    const handleLogout = () => {
      console.log("Log out!");
      window.location.href = "/";
      //this.props.logOut();
    };
    return (
      <div className="prof-container">
        <div className="prof-header">
          <img src={userData.userImg} alt="Profile image" />
        </div>
        <div className="prof-body">
          <h3>Account Details</h3>
          <p>
            <span>Name: </span>
            {userData.name}
          </p>
          <p>
            <span>Email: </span>
            {userData.email}
          </p>
          <p>
            <span>Birth date: </span>
            {userData.dateOfBirth}
          </p>
          <p>
            <span>Phone number: </span>
            {userData.phone}
          </p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.userData
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(requestLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
