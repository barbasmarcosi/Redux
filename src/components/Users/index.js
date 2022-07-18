import { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import '../../css/table.css'

import * as usersActions from "../../actions/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  putContent = () => {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    } else {
      return (
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Web Site</th>
            </tr>
          </thead>
          <tbody>{this.putTable()}</tbody>
        </table>
      );
    }
  };

  putTable = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return <div className="Users">{this.putContent()}</div>;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
