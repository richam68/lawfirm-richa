import "./herosection.css";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = () => {
  return (
    <div className="herosection-container">
      <div className="hero-paragraph">
        <div>

        <h3 className="title">You don't have to</h3>
        <h1 className="sub-title">
          <strong>Fight them Alone</strong>
        </h1>
        </div>
        <div>

        <p className="hero-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          condimentum, lorem et ullamcorper vulputate, libero ligula bibendum
          quam, tempus convallis metus lorem quis orci. Proin lorem eros, dictum
          facilisis egestas nec, cursus in elit. Phasellus placerat vehicula
          diam. Ut nec tristique quam. Nam tempor luctus viverra.
        </p>
        </div>
        <div className="text-box">
          <EmailIcon
            style={{
              color: "white",
              position: "absolute",
              zIndex: 1,
             marginTop: "20px",
             marginLeft: "12px"
            }}
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className="input-text"
          />

          <button className="hero-button">Let's Talk</button>
        </div>
      </div>
      <img src="heroImage.png" alt="hero-img" className="hero-image" />
    </div>
  );
};

export default HeroSection;
