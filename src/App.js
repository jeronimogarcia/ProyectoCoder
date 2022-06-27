import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
