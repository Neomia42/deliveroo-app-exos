import { useState } from "react";
import "./CategoriesMenu.css";
import Cart from "../Cart/Cart";
const CategoriesMenu = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemInCart = prevCartItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  const { categories } = props;
  return (
    <div className="menu-container">
      <div className="menu-container--center">
        <div className="menu-items">
          {categories.map((category, index) => (
            <div key={category.name + index} className="category-section">
              {category.meals.length > 0 && (
                <h2 className="categorie-name">{category.name}</h2>
              )}

              <div className="meals-grid">
                {category.meals.map((meal, mealIndex) => (
                  <div
                    key={meal.id + mealIndex}
                    className="meal-item"
                    onClick={() => {
                      addToCart({
                        id: meal.id,
                        index: mealIndex,
                        title: meal.title,
                        price: meal.price,
                      });
                    }}
                  >
                    <div className="left-content">
                      {meal.title && <h2>{meal.title}</h2>}
                      {meal.description && <p>{meal.description}</p>}
                      {meal.price && (
                        <div className="meal-price">{meal.price + " € "}</div>
                      )}
                    </div>
                    {meal.picture && (
                      <div className="meal-image">
                        <img src={meal.picture} alt="photo du menu" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
};
export default CategoriesMenu;
