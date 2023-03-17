import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FoodDetail from './FoodDetail/FoodDetail';
import SignUp from "./Register/RegisterForm";
import Login from "./GoogleRecaptcha/Login";
import TestPopup from "./Popup/TestPopup";
import TestResponsive from "./TestResponsive/TestResponsive";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:category" element={<HomePage />}></Route>
        <Route path="/:category/:id" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<FoodDetail />}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/popup" element={<TestPopup/>}></Route>
        <Route path="/TestResponsive" element={<TestResponsive/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
