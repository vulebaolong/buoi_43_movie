import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserLayout from './layouts/UserLayout/UserLayout';
import './api/baseApi'

function App() {
  return (
    <div className="App">
     
      
      <Routes>
          {/* HOME LAYOUT */}
          <Route element={<HomeLayout />}>
              <Route index element={<HomePage />} />
              <Route path='home' element={<HomePage />} />
          </Route>
      
          {/* USER LAYOUT */}
          <Route element={<UserLayout />}>
              <Route path='login' element={<LoginPage />} />
              {/* <Route path='signin' element={<SignIn />} /> */}
          </Route>
      
          {/* OTHER */}
          <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
