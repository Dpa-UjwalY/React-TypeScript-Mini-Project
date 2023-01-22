import { Card, Button, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { MdDelete } from "react-icons/md";
import storeItems from "../data/items.json";
import "../App.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { increaseItemQuant, decreaseItemQuant, removeFromCart } =
    useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Card className="cart-item-align" >
      <Row className="p-0">
        <Col>
          <Card.Img variant="top"
            src={item.url}
            height="150px"
            style={{ objectFit: "cover" }} />
        </Col>
        <Col className="ps-0 d-flex flex-column justify-content-between" >
            <div className="d-flex justify-content-between align-items-center">
              <span className="ms-0">{item.name}</span>
              <span className="ms-0 text-muted px-2 ">
                {formatCurrency(item.price)}
              </span>
            </div>
            <div className="mt-auto">
              {quantity === 0 ? (
                true
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button size="sm" variant="dark" onClick={() => decreaseItemQuant(id)}>
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span>
                  </div>
                  <Button size="sm" variant="dark" onClick={() => increaseItemQuant(id)}>
                    +
                  </Button>
                  <MdDelete
                    onClick={() => removeFromCart(id)}
                    style={{ width: "2rem", height: "3rem" }}
                  />
                </div>
              )}
            </div>
          <div className="text-muted d-flex justify-content-between align-items-end">
            <span className="">
              Price for {quantity} = </span><span> {formatCurrency(item.price * quantity)}
            </span>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
