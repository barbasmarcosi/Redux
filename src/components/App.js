const App = () => {
  const putTable = () => [
    <tr>
      <td>Rodolfo</td>
      <td>rodolfo@mail.com</td>
      <td>rodolfo.com</td>
    </tr>,
    <tr>
      <td>Marcos</td>
      <td>marcos@mail.com</td>
      <td>marcos.com</td>
    </tr>,
  ];

  return (
    <div className="App">
      <table className="Table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{putTable()}</tbody>
      </table>
    </div>
  );
};

export default App;
