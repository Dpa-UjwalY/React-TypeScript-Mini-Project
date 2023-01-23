import { Container, Stack } from "react-bootstrap";
import "../App.css";
import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

export function Cart() {
  const { cartQuant, cartItems } = useShoppingCart();

  return (
    <>
      {cartQuant ? (
        <div className="store-page app">
          <Container>
            <Stack  gap={1}  >
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
            <div>
              <h2>
                Total{" "}
                <span>
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find(
                        (item) => item.id === cartItem.id
                      );
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </span>
              </h2>
            </div>
          </Container>
        </div>
      ) : (
        <h1 className="store-page app">Opps.... It's lonely here</h1>
      )}
    </>
  );
}
