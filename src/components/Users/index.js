import { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  putTable = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className="Users">
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
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
