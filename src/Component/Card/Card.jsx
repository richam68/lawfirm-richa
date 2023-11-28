import "./card.css";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function Card() {
  return (
    <div className="card-main-container">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="icon">
            <CardGiftcardIcon
              style={{
                zIndex: 1,
                border: "none",
                color: "black",
                fontSize: "45px",
              }}
            />
          </div>

          <h1 className="success-rate">98% Success Rate</h1>
          <p className="content">
            Quisque mollis ligula id orci tempor sodales. Donec est magna,
            laoreet id laoreet id, tempus id nisi. Cras pellentesque in nisl
            vitae luctus.
          </p>
          <div className="card-button-wrapper">
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-wrapper">
          <div className="icon">
            <CardGiftcardIcon
              style={{
                zIndex: 1,
                border: "none",
                color: "black",
                fontSize: "45px",
              }}
            />
          </div>

          <h1 className="success-rate">98% Success Rate</h1>
          <p className="content">
            Quisque mollis ligula id orci tempor sodales. Donec est magna,
            laoreet id laoreet id, tempus id nisi. Cras pellentesque in nisl
            vitae luctus.
          </p>
          <div className="card-button-wrapper">
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-wrapper">
          <div className="icon">
            <CardGiftcardIcon
              style={{
                zIndex: 1,
                border: "none",
                color: "black",
                fontSize: "45px",
              }}
            />
          </div>

          <h1 className="success-rate">98% Success Rate</h1>
          <p className="content">
            Quisque mollis ligula id orci tempor sodales. Donec est magna,
            laoreet id laoreet id, tempus id nisi. Cras pellentesque in nisl
            vitae luctus.
          </p>
          <div className="card-button-wrapper">
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
