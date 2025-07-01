import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Event Manager</h4>
          <p>Your simple solution for event management and planning.</p>
        </div>
        
        <div className="footer-section">
          <h5>Features</h5>
          <ul>
            <li>Event Management</li>
            <li>Status Tracking</li>
            <li>Smart Search</li>
            <li>AI Assistant</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h5>Support</h5>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Event Manager. Built with MERN Stack.</p>
      </div>
    </footer>
  );
};

export default Footer;