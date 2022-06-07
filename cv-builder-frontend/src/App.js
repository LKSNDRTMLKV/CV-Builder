
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Provider } from "./context/Context";

import  Home  from './components/Pages/home/Home';
import  Main  from './components/Pages/form/Main'
import './App.css';
import Navbar from "./components/Pages/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./components/constants/Theme";
import { API } from "./components/constants/API"; 
import SignIn from "./components/Pages/login/SignIn";
import NotFound from "./components/Pages/notFound/NotFound";
import SignUp from "./components/Pages/login/SignUp";
import AdminDashboard from "./admin/AdminDashboard";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import Templates from "./templates/Templates";
import Norway from "./templates/CV/Norway";
import Account from "./components/Pages/account/Account";





function App() {

  return (
    <Provider>
      <ThemeProvider theme={theme}>
      <Router>
      <Navbar paths={API.paths} />
     
        <Routes>
          {/* APP */}
        <Route path={API.paths.sign_in} exact element={ <SignIn />} />
        <Route path={API.paths.sign_up} exact element={ <SignUp />} />
        <Route path={API.paths.home} exact element={<Home />} />
        <Route path={API.paths.dashboard} exact element={<Dashboard />} />
        <Route path={API.paths.create_cv_id} exact element={<Main />} />
        <Route path={API.paths.not_found} exact element={<NotFound />} />
        <Route path={API.paths.teplates} exact element={<Templates />} />
        <Route path={API.paths.account} exact element={<Account />} />

        {/* TESTING */}
        <Route path="/app/templates/norway" exact element={<Norway />} />
        

        {/* ADMIN */}
        <Route path={API.admin.dashboard} exact element={<AdminDashboard />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>
  
  );
}

export default App;
