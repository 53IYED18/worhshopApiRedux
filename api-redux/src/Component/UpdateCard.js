import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function UpdateCard({product}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product_Name,setProductName]= useState(product.product_Name)
  const [product_Material,setProductMaterial]= useState(product.product_Material)
  const [category,setCategry]= useState(product.category)
  const [product_Image,setProductImage]= useState(product.product_Image)
  const [quantity,setQuantity]= useState(product.quantity)
  const [Promo_price,setPromoPrice]= useState(product.Promo_price)
  const [Original_Price,setOriginalPrice]= useState(product.Original_price)

  return (
    <>
      <Button variant="primary" style={{marginLeft:'2rem', marginRight:'2rem'}} onClick={handleShow}>update</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>product_Name</Form.Label>
        <Form.Control type="text" placeholder={product_Name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>product_Material</Form.Label>
        <Form.Control type="text" placeholder={product_Material} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>product_Image</Form.Label>
        <Form.Control type="text" placeholder={product_Image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder={category} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="text" placeholder={quantity} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>Promo_price</Form.Label>
        <Form.Control type="text" placeholder={Promo_price} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="...">
        <Form.Label>Orginal_Price</Form.Label>
        <Form.Control type="text" placeholder={Original_Price} />
      </Form.Group>


    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateCard;