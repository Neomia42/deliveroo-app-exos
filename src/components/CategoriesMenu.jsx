const CategoriesMenu = (props) => {
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
                  <div key={meal.id + mealIndex} className="meal-item">
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
        <div className="cart-container">
          <div className="cart"></div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesMenu;
