import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from './Components/Auth/Auth';
import ForgotPassword from './Components/ForgetPassword/ForgetPassword';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />



      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
