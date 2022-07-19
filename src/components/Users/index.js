import { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Table from "./Table";

import * as usersActions from "../../actions/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return <Table users={this.props.users} />;
  };

  render() {
    return <div className="Users">{this.putContent()}</div>;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
