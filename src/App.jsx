import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home";
import Hostels from "./components/Hostels";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import HostelDetails from "./components/HostelDetails";
import FeePaymentForm from "./components/Fee";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hostels/:id" element={<HostelDetails />} />
          <Route path="/fee-payment" element={<FeePaymentForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
