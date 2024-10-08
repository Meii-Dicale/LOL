
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PersoDetailCard({persodata}) {
  
  return (
    <Card  className="gap-3 p-5 d-flex flex-row align-items-center justify-content-center"style={{ width: '100rem', backgroundImage: 'linear-gradient(blue,darkblue)', color:'#DFAF2C' }}>
      <div className='d-flex flex-column '><Card.Img className=" rounded"variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+persodata.id+"_0.jpg"} />
      <ListGroup.Item className ="d-flex align-center-items justify-content-center"style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}>{(persodata.title && persodata.title)}</ListGroup.Item>

      </div><Card.Body>
        <Card.Title>{persodata.id}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush rounded" >
        <ListGroup.Item style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}> <h2> Histoire :</h2>
            {persodata.lore}</ListGroup.Item>
        <ListGroup.Item style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}>  <h2> Comment jouer :</h2>{persodata.enemytips}</ListGroup.Item>
        <ListGroup.Item style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}>Tips 1 : {(persodata.allytips && persodata.allytips[0])}</ListGroup.Item>
        <ListGroup.Item style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}>Tips 2 : {(persodata.allytips && persodata.allytips[1])}</ListGroup.Item>
        <ListGroup.Item style={{backgroundImage: 'linear-gradient(darkblue,blue)', color:'#DFAF2C'}}>Tips 3 : {(persodata.allytips && persodata.allytips[2])}</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Card.Link >Card Link</Card.Link>
        <Card.Link >Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PersoDetailCard;