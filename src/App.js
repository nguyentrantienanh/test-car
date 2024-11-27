import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarProvider } from "./context/CarContext";
import Home from "./components/Home"; // Trang chủ hiển thị danh sách xe
import CarDetails from "./components/CarDetails"; // Chi tiết xe
import RentCars from "./components/RentCars"; // Thuê xe
import CarInventory from "./components/CarInventory"; // Quản lý xe
import Navbar from "./components/Navbar"; // Thanh điều hướng
import RentalHistory from "./components/RentalHistory"; // Lịch sử thuê xe
import CarList from "./components/CarList"; // Hiển thị danh sách xe
import cars from "./data/cars"; // Dữ liệu mẫu cho danh sách xe
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap cho giao diện
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <CarProvider>
      <Router>
        <div>
          <Navbar /> {/* Thanh điều hướng */}
          <Routes>
            {/* Các route chính */}
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<RentCars />} />
            <Route path="/inventory" element={<CarInventory />} />
            <Route path="/rental-history" element={<RentalHistory />} />
            <Route 
              path="/cars" 
              element={<CarList cars={cars} />} // Sử dụng CarList tại một route riêng
            />
            <Route path="/car/:id" element={<CarDetails />} /> {/* Route chi tiết xe */}
          </Routes>

          {/* Thêm footer sau các routes */}
          <Footer /> {/* Footer component */}
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;
