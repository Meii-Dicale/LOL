import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersosPage from './pages/PersosPage';
import PersoDetailPage from './pages/PersoDetailPage';

function App() {
 

  return <> 
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>

  <Route path="/" element={<HomePage></HomePage>}></Route>
  <Route path="/persos" element= {<PersosPage></PersosPage>}></Route>
  <Route path='/perso/:PersoName' element={<PersoDetailPage></PersoDetailPage>} ></Route>




  </Routes>
  
  
  
  
  
  </BrowserRouter>
  </>


}

export default App
