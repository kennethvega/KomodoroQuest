import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/home/Dashboard";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Login />} />
            {/* <Route path="/" element={user ? <Dashboard /> : <Dashboard />} />
             */}
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
