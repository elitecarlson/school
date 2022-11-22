import { Route, Routes } from "react-router-dom";
import "../src/Assets/css/app.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
import PageNotFound from "./components/404";
import Crud from "./components/crud";
import Player from "./components/player";
import QselectDiv from "./components/q-selectDiv";
import Qselect from "./pages/q-select";
import QselectAdmin from "./pages/q-selectAdmin";
import Loading from "./components/loading";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Account/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Crud/>}></Route>
      <Route path="/quiz" element={<Qselect/>}></Route>
      <Route path="/admin/q" element={<QselectAdmin/>}></Route>
      <Route path="/dev/player" element={<Player/>}></Route>
      <Route path="/dev/qsNav" element={<QselectDiv/>}></Route>
      <Route path="/dev/loading" element={<Loading/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
