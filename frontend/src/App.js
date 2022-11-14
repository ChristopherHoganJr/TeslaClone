// CSS
import "./App.css";
// components
import Navbar from "./components/Navbar";
import ProductSection from "./components/landingPage/ProductSection";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ProductSection
        productName={"Product Name"}
        productSub={"Order Online for Touchless Delivery"}
        primaryButton={"Button 1"}
        secondaryButton={"Button 2"}
      />
    </div>
  );
}

export default App;
