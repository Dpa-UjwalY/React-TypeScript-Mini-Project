import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type ItemProps = {
  id: number;
  name: string;
  price: number;
  url: string;
};

export function StoreItem({ id, name, price, url }: ItemProps) {
  
    const {getItemQuant, increaseItemQuant, decreaseItemQuant, removeItemQuant} = useShoppingCart()

    const quantity = getItemQuant(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={url}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="border border-secondary bg-dark w-100 " onClick={() => increaseItemQuant(id)}>
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-item-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button variant="dark" onClick={() => decreaseItemQuant(id)} >-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button variant="dark" onClick={() => increaseItemQuant(id)} >+</Button>
              </div>
              <Button onClick={() => removeItemQuant(id)} variant="dark" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}