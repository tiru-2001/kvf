import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import {
  Parent,
  Home,
  Login,
  Register,
  LoginOption,
  AdminDashboard,
  UserDashboard,
  ReviewerDashboard,
  UserCompliance,
  UserCompany,
} from './pages';
import { ForgotPassword } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="login-user" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LoginOption />} />
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path="reviewer-dashboard" element={<ReviewerDashboard />} />
            <Route path="/user-company" element={<UserCompany />} />
            <Route path="/user-compliance" element={<UserCompliance />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
