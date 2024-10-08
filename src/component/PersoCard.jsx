
import Card from 'react-bootstrap/Card';


import { useNavigate } from 'react-router-dom';

function PersoCard({persoCard, PersoName}) {
    const navigate = useNavigate(); 
    
    const navigateTo = (PersoName) => {
        navigate(`/perso/`+PersoName);
    };

    return (
      <Card style={{ width: '18rem'
       }} 
       onClick={() => {navigateTo(PersoName)}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/"+PersoName+".png"} />
        <Card.Body >
          <Card.Title>{persoCard.name}</Card.Title>
          <Card.Text>{persoCard.title}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default PersoCard;