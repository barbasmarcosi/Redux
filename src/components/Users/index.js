import { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: users.data
    })
  }

  putTable = () => (
    this.state.users.map((user) => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );

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

export default Users;