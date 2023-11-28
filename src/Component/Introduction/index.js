import Card from "../Card/Card";
import "./introduction.css";
const Introduction = () => {
  return (
    <div className="introdution-head">
      <div className="head-wrapper">
        <p className="head">Let's Introduce Ourself</p>

        <p className="break-point"></p>
        <div className="message">
          <h2>Criminal Lawyer</h2>
          <p className="content-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
            sapien, elementum ut dignissim at, consectetur at orci. Pellentesque
            in malesuada velit. Etiam ultrices enim viverra commodo tincidunt.
            Nulla ullamcorper urna et lacus pretium sodales.{" "}
          </p>
        </div>
      </div>
      <br />
      <div className="card-section">
        <h1 className="">Why Choose us?</h1>
        <Card />
      </div>
    </div>
  );
};

export default Introduction;
