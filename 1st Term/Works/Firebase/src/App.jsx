import { Route, Routes } from "react-router-dom";
import "../src/Assets/css/app.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
// import PageNotFound from "./components/404";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Account/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      {/* <Route path="/:id" element={<Account/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
