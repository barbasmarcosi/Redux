import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Menu from "./Menu";
import Tasks from "./Tasks";
import Publications from "./Publications";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="Routes">
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="/tasks" element={<Tasks />} />
            <Route exact path="/publications/:key" element={<Publications />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
