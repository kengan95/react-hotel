//import logo from './logo.svg';
import './App.css';
import MainBanner from './home/MainBanner';
import Presentacion from './home/Presentacion';
import Discover from './home/Discover';
import Blog from './home/Blog';
import SeparadorFooter from './home/SeparadorFooter';

function App() {
  return (
    <div>
      <MainBanner />
      <Presentacion />
      <Discover />
      <Blog />
      <SeparadorFooter />
    </div>
  );
}

export default App;
