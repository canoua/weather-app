import './App.scss';
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import PrivatePage from './pages/PrivatePage';
import Helmet from 'react-helmet';

function App() {
  return(
    <div>
      <Helmet title="Weather-App" />
      <HomePage />
      <div className='page'>
        <LoginPage />
      </div>
      <div className='page'>
        <RegistrationPage />
      </div>
      <div className='page'>
        <PrivatePage />
      </div>
    </div>
  )
}

export default App;
