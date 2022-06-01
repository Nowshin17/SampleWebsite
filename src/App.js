import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Sec1 from './Component/Sections/Sec1';
import Sec2 from './Component/Sections/Sec2';
import Sec3 from './Component/Sections/Sec3';
import Section8 from './Component/Sections/Section8';

function App() {

  
  return (
    <div>
    
     <Navbar />
    <Sec1 />
    <Sec2 />
    {/* <Sec2 /> */}
    <Sec3 />
    <Section8 />
    <Footer />
      
 </div>
  );
}

export default App;
