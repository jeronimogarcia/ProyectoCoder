import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { MobileProvider } from "./context/mobile";
import whatsapp from "./Images/whatsapp.svg";

function App() {
  return (
    <MobileProvider>
      <div className="app__Container">
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <a
          href="https://wa.me/+5491164645254?text=Buen%20d%C3%ADa%2C%0AEstoy%20interesado%20en%20los%20servicios%20de%20Ra%C3%ADz"
          target="_blank"
          rel="noreferrer"
        >
          <img className="whatsapp" src={whatsapp} alt={whatsapp} />
        </a>
        <Header></Header>
        <Title></Title>
        <WhoWeAre></WhoWeAre>
        <Products></Products>
        <Footer></Footer>
      </div>
    </MobileProvider>
  );
}

export default App;
