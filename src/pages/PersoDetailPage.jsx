import { useParams } from "react-router-dom";
import PersosService from "../services/PersosService";
import { useEffect, useState } from "react";
import PersoDetailCard from "../component/Persodetail";
import { Container } from "react-bootstrap";

const PersoDetailPage = () => {
    const { PersoName } = useParams();
    const [persodata, setPersodata] = useState({});

    const fetchInfoPerso = async () => {
        try {
            const response = await PersosService.getInfoPerso(PersoName);
            setPersodata(Object.entries(response.data.data)[0][1]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchInfoPerso();
    }, [PersoName]);

    console.log(persodata);

    return (
        <div className="d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${PersoName}_0.jpg)`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',

            }}
        >
            <Container className="d-flex align-items-center justify-content-center">
                <PersoDetailCard persodata={persodata} key={persodata.id}></PersoDetailCard>
            </Container>
        </div>
    );
};

export default PersoDetailPage;
