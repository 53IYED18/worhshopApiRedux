import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateCard from './UpdateCard';

function Cards({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.product_Image} style={{height:'10rem',width:'18rem'}}/>
      <Card.Body>
        <Card.Title>Title: {product.product_Name}</Card.Title>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>Material: {product.product_Material}</Card.Text>
        <Card.Text>Promo price: ${product.Promo_price}</Card.Text>
        <Card.Text>Original price: ${product.Original_price}</Card.Text>
        <UpdateCard product={product}/>
        <Button variant="secondary">delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
