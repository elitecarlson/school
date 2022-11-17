import { Route, Routes } from "react-router-dom";
import "../src/Assets/css/app.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
import PageNotFound from "./components/404";
import Crud from "./components/crud";
import Questions from "./components/questions";
import Navbar from "./components/navbar";
import Questions_admin from "./components/questions-admin";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Account/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Crud/>}></Route>
      <Route path="/q" element={<Questions/>}></Route>
      <Route path="/admin/q" element={<Questions_admin/>}></Route>
      <Route path="/navbar" element={<Navbar/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
