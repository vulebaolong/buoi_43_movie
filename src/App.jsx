import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserLayout from './layouts/UserLayout/UserLayout';
import './api/baseApi'
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
     
      
      <Routes>
          {/* HOME LAYOUT */}
          <Route element={<HomeLayout />}>
              <Route index element={<HomePage />} />
              <Route path='home' element={<HomePage />} />
              <Route path='/detail/:id' element={<DetailPage />} />
          </Route>
      
          {/* USER LAYOUT */}
          <Route element={<UserLayout />}>
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
          </Route>
      
          {/* OTHER */}
          {/* <Route path='*' element={<Navigate to={'/'} />} /> */}
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
