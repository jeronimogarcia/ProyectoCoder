import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import {MobileProvider} from './context/mobile'

function App() {
  return (
    <MobileProvider>
      <div className="app__Container" >
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
        <div className="app_Radiants"></div>
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
