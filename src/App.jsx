import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersosPage from './pages/PersosPage';
import PersoDetailPage from './pages/PersoDetailPage';
import ItemsPage from './pages/ItemsPages';
import ItemDetail from './component/ItemDetail';

function App() {
 

  return <> 
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>

  <Route path="/" element={<HomePage></HomePage>}></Route>
  <Route path="/persos" element= {<PersosPage></PersosPage>}></Route>
  <Route path='/perso/:PersoName' element={<PersoDetailPage></PersoDetailPage>} ></Route>
  <Route path="/items" element= {<ItemsPage></ItemsPage>}></Route>
  <Route path='/item/:itemName' element={<ItemDetail></ItemDetail>} ></Route> 



  </Routes>
  
  
  
  
  
  </BrowserRouter>
  </>


}

export default App
