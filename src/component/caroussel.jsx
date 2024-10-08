import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import PersoDetailCard from "../component/Persodetail";
import PersosService from "../services/PersosService";
import PersoCard from "./PersoCard";

const PersoCarousel = () => {
    const [persos, setPersos] = useState([]);
    const [randomPersoIndex, setRandomPersoIndex] = useState(0);

    const fetchPersos = async () => {
        try {
            const response = await PersosService.getAllPersos();
            const allPersos = Object.values(response.data.data);
            setPersos(allPersos);
            setRandomPersoIndex(Math.floor(Math.random() * allPersos.length));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPersos();
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }}>
            {persos.length > 0 && (
                <Carousel
                    activeIndex={randomPersoIndex}
                    onSelect={(selectedIndex) => setRandomPersoIndex(selectedIndex)}
                    controls={true}
                    indicators={false}
                    interval={2000} 
                >
                    {persos.map((perso, index) => (
                        <Carousel.Item key={perso.id}>
                            <PersoCard persoCard={perso} PersoName={perso.id}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </Container>
    );
};

export default PersoCarousel;
