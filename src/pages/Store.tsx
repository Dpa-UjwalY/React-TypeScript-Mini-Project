import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import "../App.css"
export function Store() {
  return (
    <div className="store-page" >
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-3">
        {storeItems.map((items) => (
          <Col key={items.id}>
            <StoreItem {...items} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
