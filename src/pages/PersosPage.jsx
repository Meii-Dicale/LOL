import { useEffect, useState } from "react";
import PersosService from "../services/PersosService";
import PersoCard from "../component/PersoCard";
import { Container } from "react-bootstrap";



const PersosPage = () => {
    const [persos, setPersos] = useState({});
    

    const fetchPersos = async () => {

        try {
            const response = await PersosService.getAllPersos();
            console.log(response.data.data);
            setPersos(response.data.data);

        } catch (error) {
            console.error(error);


        }
    }

    useEffect(() => {

        fetchPersos();
    }, [])

    return <>
<Container >
    <div className="d-flex flex-row flex-wrap justify-content-center">
{Object.entries(persos).map((perso) => {
    console.log(perso);
            return  <PersoCard persoCard={perso[1]} PersoName={perso[0]} key={perso[1].id}></PersoCard>
        })}
</div>
</Container>
    </>

}

export default PersosPage;