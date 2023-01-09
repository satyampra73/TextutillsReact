import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
  <>  
<Navbar title ="Textutills2" aboutText="About TextUtils"/>

<div className='container'>

{/* <TextForm heading='Enter the text to analize'/> */}
<About/>
</div>
  </> 
  );
}

export default App;
