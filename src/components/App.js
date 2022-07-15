import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "rodolfo", email: "rodolfo@mail.com", website: "rodolfo.com" },
        { name: "marcos", email: "marcos@mail.com", website: "marcos.com" },
      ],
    };
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
      <div className="App">
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

export default App;
