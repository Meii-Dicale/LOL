import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersosPage from './pages/PersosPage';
import PersoDetailPage from './pages/PersoDetailPage';
import ItemsPage from './pages/ItemsPages';
import ItemDetail from './component/ItemDetail';


function App() {
    return (

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/persos" element={<PersosPage />} />
                    <Route path="/perso/:PersoName" element={<PersoDetailPage />} />
                    <Route path="/items" element={<ItemsPage />} />
                    <Route path="/item/:itemName" element={<ItemDetail />} />
                </Routes>
            </BrowserRouter>

    );
}

export default App;
