import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Feature from "./components/Feature";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="home">
      <ResponsiveAppBar />
      <div>
        <Carousel>
          <div>
            <img src="\home1.jpg" />
          </div>
          <div>
            <img src="\home2.jpg" />
          </div>
          <div>
            <img src="\home3.jpg" />
          </div>
          <div>
            <img src="\home4.jpg" />
          </div>
          <div>
            <img src="\home5.jpg" />
          </div>
          <div>
            <img src="\home6.jpg" />
          </div>
        </Carousel>
      </div>
      <Feature />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
