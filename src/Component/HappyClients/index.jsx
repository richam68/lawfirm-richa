import ClientCards from "../ClientCards";
import "./happyClients.css";
// import Flickity from 'react-flickity-component'
// const flickityOptions = {
//     initialIndex: 2
// }
const HappyClients = () => {
  return (
    <div className="hapyClient-wrapper">
      <div className="happyClient-heading">
        <h1 className="client-title">What says our happy clients</h1>
        <div> carousel</div>
      </div>

<ClientCards />
    </div>
  );
};

export default HappyClients;
