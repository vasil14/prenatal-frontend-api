import { useLocation } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';
//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesComponent from './components/routes/RoutesComponent';

const App = () => {
  const location = useLocation();

  return (
    <ProductProvider>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <div className="bg-white w-full left-0 top-0 z-50  sticky">
          <Navbar />
        </div>
      )}
      <RoutesComponent />
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <Footer />
      )}
    </ProductProvider>
  );
};

export default App;
