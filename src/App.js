import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FoodDetail from './FoodDetail/FoodDetail';
import SignUp from "./Register/RegisterForm";
import Login from "./GoogleRecaptcha/Login";
import TestPopup from "./Popup/TestPopup";
import TestResponsive from "./TestResponsive/TestResponsive";
import AddItem from "./Admin/AddItem/AddItem";
// import ViewListItems from "./Admin/ViewListItems/ViewListItems";
import LoginForm from "./GoogleRecaptcha/LoginForm";
import ProtectedRoute from "./Context/ProtectedRoute";
import {AuthProvider} from "./Context/AuthProvider";
import OTPForm from "./Register/OTPForm";
import AdminManagement from "./Admin/AdminManagement";
import AddBox from "./Admin/AddItem/AddBox";
import DashBoard from "./Admin/DashBoard/DashBoard";
function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<HomePage />}></Route>
            <Route path="/detail/:id" element={<FoodDetail />}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
            <Route  path="/login"  element={<LoginForm/>}></Route>
            <Route path="/popup" element={<TestPopup/>}></Route>
            <Route path="/TestResponsive" element={<TestResponsive/>}></Route>
            <Route path="/validateOTP" element={<OTPForm/>}></Route>
            <Route path="/management" element={<ProtectedRoute element={<AdminManagement/>} />} >
              <Route path="" element={<DashBoard/>}/>
              <Route path="add" element={<AddBox/>}/>
              <Route path="detail" element={<FoodDetail/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>


  );
}

export default App;
