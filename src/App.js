import Navbar from "../src/Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Introduction from "./Component/Introduction";
import AreaOfPractice from "./Component/AreaOfPractice";
import HappyClients from "./Component/HappyClients";
import Team from "./Component/Team";
import Faq from "./Component/Faq";
import './App.css';
import Subscribe from "./Component/Subscribe";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <HeroSection/>
   <Introduction/>
   <AreaOfPractice/>
   <HappyClients />
   <Team/>
   <Faq/>
   <Subscribe/>
    </div>
  );
}

export default App;
