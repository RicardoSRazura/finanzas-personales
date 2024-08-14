// import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import CuentaForm from './pages/CuentaForm';
import TransaccionForm from './pages/TransaccionForm.jsx'
import TransaccionPage from './pages/TransaccionesPage.jsx'
import HomePage from './pages/HomePage';
import UpdateForm from './pages/updateForm.jsx';
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './ProtectedRoute.jsx';
import { CuentaProvider } from './context/CuentaContext';
import { TransaccionProvider } from './context/TransaccionContex.jsx';
import Navbar from './components/Navbar.jsx';
import CuentaPage from './pages/CuentaPage.jsx';

function App() {
  return(
    <AuthProvider>
      <CuentaProvider>
        <TransaccionProvider>
          <BrowserRouter>
            <div className='flex'>
              <main className='container mx-auto px-10'>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='/register' element={<RegisterPage/>}/>

                <Route element={<ProtectedRoute/>}>
                  <Route path='/profile' element={<ProfilePage/>}/>
                  <Route path='/profile/cuentas' element={<CuentaForm/>}/>
                  <Route path='/profile/getcuenta' element={<CuentaPage/>}/>
                  <Route path='/profile/transaccion' element={<TransaccionForm/>}/>
                  <Route path='/profile/gettransaccion' element={<TransaccionPage/>}/>
                  <Route path='/profile/update/:id' element={<UpdateForm/>}/>
                </Route>
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </TransaccionProvider>
      </CuentaProvider>
    </AuthProvider>
  )
}

export default App;