import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home';
import Next from './Home/Next';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/next' element={<Next/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
