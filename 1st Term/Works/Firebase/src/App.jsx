import { Route, Routes } from "react-router-dom";
import "../src/Assets/css/app.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
import PageNotFound from "./components/404";
import Crud from "./components/crud";
import Player from "./components/player";
import QselectDiv from "./components/q-selectDiv";
import Qselect from "./pages/quiz";
import QselectAdmin from "./pages/q-selectAdmin";
import Loading from "./components/loading";
import Shuffle from "./pages/shuffle";
import Learn from "./pages/learn";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Account/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Shuffle/>}></Route>
      <Route path="/admin/q" element={<QselectAdmin/>}></Route>
      <Route path="/quiz/:id" element={<Qselect/>}></Route>
      <Route path="/learn" element={<Learn/>}></Route>
      <Route path="/dev/player" element={<Player/>}></Route>
      <Route path="/dev/qsNav" element={<QselectDiv/>}></Route>
      <Route path="/dev/loading" element={<Loading/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
