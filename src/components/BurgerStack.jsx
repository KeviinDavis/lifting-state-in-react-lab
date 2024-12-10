const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li> // Show a message when the stack is empty
      ) : (
        stack.map((ingredient, index) => (
          <li
            key={index}
            style={{
              backgroundColor: ingredient.color,
              color: ingredient.color === 'lightyellow' ? '#000' : '#FFF',
            }}
          >
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
