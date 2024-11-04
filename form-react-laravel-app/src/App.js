
import './App.css';
import Header from './Components/Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
//imprt Routes and Route 
import { Routes, Route } from'react-router-dom';


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />


      {/* <SignUp /> */}
      </Routes>
  </div>
  );
}


