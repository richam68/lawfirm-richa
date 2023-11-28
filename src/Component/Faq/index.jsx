import Accordion from "../Accordion";
import "./style.css"
const Faq = () => {
  return (
    <div className="question-container">
      <div>
        <h1>FAQ</h1>
        <p>In sem tortor, aliquam non porta eget, consectetur eu risus</p>
      </div>
      <div className="question-content">
        <h4>Do I need a personal injury report?</h4>
        <p className="question-para">
          In sem tortor, aliquam non porta eget, consectetur eu risus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nunc sollicitudin aliquet euismod. Curabitur
          vulputate velit neque, ut tempus quam faucibus sed. Nam dapibus
          maximus dignissim.{" "}
        </p>
        <br/>
        <hr/>
        <br/>
        <Accordion/>
      </div>
    </div>
  );
};

export default Faq;
