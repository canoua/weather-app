import './App.css';
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import {Helmet} from "react-helmet";

function App() {
  return(
    <div>
      <Helmet title="My site" />
      <HomePage />
      <LoginPage />
      <RegistrationPage />
    </div>
  )
}

export default App;
