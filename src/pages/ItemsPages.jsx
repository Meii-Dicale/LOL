import { useEffect, useState } from "react"
import ItemsService from "../services/ItemsService";
import ItemsCard from "../component/ItemsCard";
import { Container } from "react-bootstrap";

const ItemsPage = () => {
    const [items, setItems] = useState({});

    const fetchItems = async () => {
        try {
            
            const response = await ItemsService.getAllItems();
            console.log(response.data.data)
            setItems(response.data.data)
        } catch (error) {
            
        }
}

useEffect(() => {

    fetchItems();
}, [])

return <>
 <div className="d-flex align-items-center flex-column "style={{ backgroundImage: 'url(./fonditem.jpg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
}}>
<Container  >
    <div className="d-flex flex-row flex-wrap justify-content-center mt-5 gap-5">

{Object.entries(items).map((item) =>{
    
    return <ItemsCard item={item[1]} key={item.id}></ItemsCard>
 })}
</div>
</Container>
</div>
</>


}

export default ItemsPage;
