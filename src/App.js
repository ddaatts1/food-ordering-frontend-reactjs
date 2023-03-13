import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FoodDetail from './FoodDetail/FoodDetail';
import SignUp from "./Register/RegisterForm";

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:category" element={<HomePage />}></Route>
        <Route path="/:category/:id" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<FoodDetail />}></Route>
          <Route path="/register" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
