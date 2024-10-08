
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PersoDetailCard({ persodata }) {

  return (
    <Card id='detailcard' className="gap-3 p-5 d-flex flex-row align-items-center justify-content-center" style={{ width: '100rem', backgroundColor: 'transparent' }}>
      <div className='d-flex flex-column '><Card.Img className="w-100 rounded" variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + persodata.id + "_0.jpg"} />
        <ListGroup.Item className="d-flex align-center-items justify-content-center" style={{ backgroundColor: '#091428', color: '#DFAF2C' }}>{(persodata.title && persodata.title)}</ListGroup.Item>
        <Card.Title style={{ backgroundColor: '#091428', color: '#DFAF2C', fontSize: '30px' }}>{persodata.id}</Card.Title>
      </div><Card.Body>

        <Card.Text>

        </Card.Text>
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
  );
}

export default PersoDetailCard;