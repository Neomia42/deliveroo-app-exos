import "./Cart.css";

const Cart = (props) => {
  const { cartItems, setCartItems } = props;

  const itemChangeQuantity = (productId, quantityChange) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="valid-cart" type="button">
          Valider mon panier
        </button>
        {cartItems.length === 0 && <p>Votre panier est vide</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <p>{item.title}</p>
              <div className="cart-item-quantity">
                <button
                  type="button"
                  onClick={() => itemChangeQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => itemChangeQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart-item-price">
              {(item.price * item.quantity).toFixed(2)} €
            </div>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total panier : {totalPrice + " €"}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
