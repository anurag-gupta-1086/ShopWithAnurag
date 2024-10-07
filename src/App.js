import { Navbar } from "./components/container/Navbar";
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/container/Home";
import './App.css';
import { Footer } from "./components/container/Footer";
import { Signup } from "./components/container/Signup";
import { Login } from "./components/container/Login";
import { ForgotPass } from "./components/container/ForgotPass";
import { MyProfile } from "./components/container/MyProfile";
import { MyOrders } from "./components/container/MyOrders";
import { Cart } from "./components/container/Cart";
import { About } from "./footerComponents/container/About";
import { Contact } from "./footerComponents/container/Contact";
import { Faq } from "./footerComponents/container/Faq";
import { Careers } from "./footerComponents/container/Careers";
import { ConsumerPolicy } from "./footerComponents/container/ConsumerPolicy";
import { CancellationAndReturns } from "./footerComponents/container/CancellationAndReturns";
import { TermsOfUse } from "./footerComponents/container/TermsOfUse";
import { PrivacyPolicy } from "./footerComponents/container/PrivacyPolicy";
import { VerifyEmail } from "./components/container/VerifyEmail";
import { Products } from "./components/container/Products";
import { ResetPassword } from "./components/container/ResetPassword";

function App() {
  console.log("AG14 : pathname : ", window.location.pathname)
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgotpassword' element={<ForgotPass/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/myorders' element={<MyOrders/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/consumerpolicy' element={<ConsumerPolicy/>} />
        <Route path='/cancellation' element={<CancellationAndReturns/>} />
        <Route path='/termsofuse' element={<TermsOfUse/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/verifyemail' element={<VerifyEmail/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/resetpassword/:token' element={<ResetPassword/>} />
        <Route path='*' element={<div> Not found </div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
