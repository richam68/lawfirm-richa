import Avatar from "@mui/material/Avatar";
import "./clientCards.css";

const ClientCards = () => {
  return (
    <div className="client-card-main-container">
      <div className="client-container">
        <div className="main-section">
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <h3 className="client-name">Jane Copper</h3>
          <p className="client-intro">CEO of Hunt</p>
          <p className="client-description">
            Sed porta non ligula sit amet placerat. Aliquam rutrum vulputate
            porttitor. Quisque viverra neque eu rutrum porttitor. Aliquam
            blandit massa orci, ac tempor quam hendrerit sed. Aliquam pulvinar
            massa in enim ullamcorper vehicula.
          </p>
        </div>
      </div>

      <div className="client-container">
        <div className="main-section">
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <h3 className="client-name">Jane Copper</h3>
          <p className="client-intro">CEO of Hunt</p>
          <p className="client-description">
            Sed porta non ligula sit amet placerat. Aliquam rutrum vulputate
            porttitor. Quisque viverra neque eu rutrum porttitor. Aliquam
            blandit massa orci, ac tempor quam hendrerit sed. Aliquam pulvinar
            massa in enim ullamcorper vehicula.
          </p>
        </div>
      </div>

      <div className="client-container">
        <div className="main-section">
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <h3 className="client-name">Jane Copper</h3>
          <p className="client-intro">CEO of Hunt</p>
          <p className="client-description">
            Sed porta non ligula sit amet placerat. Aliquam rutrum vulputate
            porttitor. Quisque viverra neque eu rutrum porttitor. Aliquam
            blandit massa orci, ac tempor quam hendrerit sed. Aliquam pulvinar
            massa in enim ullamcorper vehicula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCards;
