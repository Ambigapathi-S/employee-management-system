import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import "./style/style-mobile.css";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import EmployeeForm from "./components/EmployeeForm";
import ListEmployee from "./components/EmployeeList";
import ViewEmployee from "./components/ViewEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { isUserLoggedIn } from "./services/AuthService";

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/" />;
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Login />}> </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/list" element={<AuthenticatedRoute><ListEmployee /></AuthenticatedRoute>}></Route>
        <Route path="/add" element={<AuthenticatedRoute><EmployeeForm /></AuthenticatedRoute>} ></Route>
        <Route path="/update/:id" element={<AuthenticatedRoute><EmployeeForm /></AuthenticatedRoute>}></Route>
        <Route path="/view/:id" element={<AuthenticatedRoute><ViewEmployee /></AuthenticatedRoute>}></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
