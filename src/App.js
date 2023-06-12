import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetName from "./component/getName/getName.js";
import UserList from "./component/usersList/usersList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetName />} exact></Route>
          <Route path="/usersList" element={<UserList />}></Route>
          {/* other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
