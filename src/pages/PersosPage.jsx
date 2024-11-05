import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PersosService from "../services/PersosService";
import PersoCard from "../component/PersoCard.jsx";
import { Container } from "react-bootstrap";
import "../App.css" ;
const PersosPage = () => {
    const [persos, setPersos] = useState({});
    const location = useLocation();
    
    // Obtenez le terme de recherche depuis l'URL
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    const fetchPersos = async () => {
        try {
            const response = await PersosService.getAllPersos();
            setPersos(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPersos();
    }, []);

    // Filtrer les personnages en fonction du terme de recherche
    const filteredPersos = Object.entries(persos).filter(([name]) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="background-container">
          <Container>
            <div className="d-flex flex-row flex-wrap justify-content-center gap-5 mt-5">
              {filteredPersos.map(([name, perso]) => (
                <PersoCard persoCard={perso} PersoName={name} key={perso.id} />
              ))}
            </div>
          </Container>
        </div>
      );
      
};

export default PersosPage;
