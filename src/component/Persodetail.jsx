
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PersoDetailCard({ persodata }) {

  return (
    <div>
    <Card id='detailcard' className="mt-5 gap-3 p-5 d-flex flex-column align-items-center justify-content-center" style={{ width: '100rem', backgroundColor: 'transparent' }}>
     <div className='d-flex flex-row justify-content-around col-12'> <div className='d-flex flex-column align-items-center'><Card.Img className="w-50 rounded" variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + persodata.id + "_0.jpg"} />
        <ListGroup.Item className="d-flex align-center-items justify-content-center" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>{(persodata.title && persodata.title)}</ListGroup.Item>
        <Card.Title style={{ backgroundColor: '#091428', color: '#DFAF2C', fontSize: '30px' }}>{persodata.id}</Card.Title>
        </div>
        <Container className='col-5 '>
      <p className="d-flex justify-content-center rounded"  style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Points de vie : {(persodata.stats && persodata.stats.hp)}</p>      
      <p className="d-flex justify-content-center rounded" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Armure : {(persodata.stats && persodata.stats.armor)}</p>      
      <p className="d-flex justify-content-center rounded" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>AD: {(persodata.stats && persodata.stats.attackdamage)}</p>     
      <p className="d-flex justify-content-center rounded" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>AP : {(persodata.stats && persodata.stats.hp)}</p>     
      <p className="d-flex justify-content-center rounded" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Points de vie : {(persodata.stats && persodata.stats.hp)}</p>    
   </Container> 
      </div><Card.Body>
      </Card.Body>
      <ListGroup id="liste-groupe"className="list-group-flush rounded" >
        <ListGroup.Item style={{ backgroundColor: '#091428', color: '#DFAF2C' }}> <h2> Histoire :</h2>
          {persodata.lore}</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>  <h2> Comment jouer :</h2>{persodata.enemytips}</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Tips 1 : {(persodata.allytips && persodata.allytips[0])}</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Tips 2 : {(persodata.allytips && persodata.allytips[1])}</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>Tips 3 : {(persodata.allytips && persodata.allytips[2])}</ListGroup.Item>

      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
</div>
  );
}

export default PersoDetailCard;