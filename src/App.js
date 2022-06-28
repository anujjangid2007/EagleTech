import './App.css';
import './Style/bootstrapLight.css';
import './Style/Style.css'
import './Style/CoronaStyle.css';
import TopHeader from './Common/TopHeader';
import Header from './Common/Header';
import ScrollToTop from './Common/ScrollToTop';
import Footer from './Common/Footer';
// import { useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
