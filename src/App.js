import logo from './logo.svg';
import './App.css';
import Navbarr from './components/navbar/Navbarr';
import Header from './containers/header/Header';
import About from './containers/about/About';
import Skills from './containers/skill/Skills';
import Contact from './containers/contact/Contact';
import Footer from './containers/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='background-color'>
     <Navbarr></Navbarr>
     <Header></Header>
     <About></About>
     <Skills></Skills>
     <Contact></Contact>
     <Footer></Footer>
     </div>
    </div>
  );
}

export default App;
