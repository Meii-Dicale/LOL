import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemsCard({item}) {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'rgba(240, 248, 255, 0.631)'    }}>
      <Card.Img style={{borderRadius: '30px'}} variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/"+item.image.full} />
      <Card.Body>
        <Card.Title className='persofont'>{item.name}</Card.Title>
        <Card.Text >
          {item.plaintext}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemsCard;