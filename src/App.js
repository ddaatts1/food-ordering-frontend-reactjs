import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FoodDetail from './FoodDetail/FoodDetail';
import SignUp from "./Register/RegisterForm";
import TestPopup from "./Popup/TestPopup";
import TestResponsive from "./TestResponsive/TestResponsive";
import LoginForm from "./GoogleRecaptcha/LoginForm";
import ProtectedRoute from "./Context/ProtectedRoute";
import {AuthProvider} from "./Context/AuthProvider";
import OTPForm from "./Register/OTPForm";
import AdminManagement from "./Admin/AdminManagement";
import AddBox from "./Admin/AddEditItem/AddBox";
import DashBoard from "./Admin/DashBoard/DashBoard";
import ChatApp from "./ChatBox/ChatApp";
import AdminListItems from "./Admin/AdminListItems/AdminListItems";
import EditBox from "./Admin/AddEditItem/EditBox";
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
              <Route path="chat" element={<ChatApp/>}></Route>
              <Route path="Items" element={<AdminListItems/>}></Route>
              <Route path="Items/EditItem" element={<EditBox/>}></Route>
            </Route>
            <Route path="/ChatApp" element={<ChatApp/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>


  );
}

export default App;
