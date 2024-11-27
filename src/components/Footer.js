import React from 'react';
import '../styles/Footer.css';  // Importing CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Company Name</h2>
          <p>Contact us: <a href="mailto:contact@company.com">contact@company.com</a> | Phone: <a href="tel:+123456789">+123 456 789</a></p>
        </div>

        <div className="footer-center">
          <p>
            <a href="/">Trang chủ</a> | 
            <a href="/rent">Thuê xe</a> | 
            <a href="/inventory">Kho xe</a> | 
            <a href="/rental-history">Lịch sử thuê xe</a>
          </p>
        </div>

        <div className="footer-right">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
