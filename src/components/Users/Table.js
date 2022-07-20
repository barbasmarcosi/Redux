import "../../css/table.css";
import { Link } from "react-router-dom";

const Table = ({ users }) => {
  const putTable = () =>
    users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={ `/publications/${key}` }>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Web Site</th>
        </tr>
      </thead>
      <tbody>{putTable()}</tbody>
    </table>
  );
};

export default Table;
