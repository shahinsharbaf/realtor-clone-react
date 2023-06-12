import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/user/Profile";
import Offers from "./pages/offers/Offers";
// import ForgotPassword from "./pages/auth/ForgotPassword";
import SignIn from "./pages/auth/signin/SignIn";
// import SignUp from "./pages/auth/SignUp";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
