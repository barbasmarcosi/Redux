import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Menu from "./Menu";
import Tasks from "./Tasks";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="Routes">
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
