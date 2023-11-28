import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src="logo.png" alt="logo_image" className="image-wrapper" />

      <div className="navbar-list">
        <p>Home</p>
        <p>Attroneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className="navbar-button">
        <button className="button-section">Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
