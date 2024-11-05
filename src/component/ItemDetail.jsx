import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function ItemDetail() {
    const location = useLocation();
    const { item } = location.state || {}; // Récupère l'item à partir de l'état


    return (
        <div className='d-flex align-items-center' style={{ backgroundImage: 'url(../fonditem.jpg)',backgroundSize: 'cover', backgroundAttachment: 'fixed', height :'85vh'}}>
        <Card className='d-flew flex-row align-items-center ' style={{ width: '24rem', margin: 'auto', backgroundColor: 'rgba(240, 248, 255, 0.9)', borderRadius: '8%' }}>
            <Card.Img
                style={{ borderRadius: '8px', marginTop: '10px', width: '20%', height: '20%'}}
                variant="top"
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
            />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>Coût : </strong>{item.gold.total} pièces</Card.Text>
                {item.plaintext && <Card.Text>{item.plaintext}</Card.Text>}
            </Card.Body>
        </Card>
        </div>
    );
}

export default ItemDetail;
