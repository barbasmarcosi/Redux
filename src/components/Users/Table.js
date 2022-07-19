import "../../css/table.css";

const Table = ({ users }) => {
  const putTable = () =>
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
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
