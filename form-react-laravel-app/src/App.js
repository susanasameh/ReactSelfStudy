
import './App.css';
import './dashboard.css';
import './all.min.css'
import Header from './Components/Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Dashboard from './Dashboard';
import Users from './Users';
//imprt Routes and Route 
import { Routes, Route } from'react-router-dom';


export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* put users only and <Outlet/> in the dashboard display the correct url (./dashboard/users)*/}
          <Route path="users" element={<Users />} />
        </Route>

        {/* <SignUp /> */}
      </Routes>
    </div>
  );
}


