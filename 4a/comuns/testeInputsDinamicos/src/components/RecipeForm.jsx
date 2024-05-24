import React, { useState } from 'react';

function RecipeForm() {
  const [ingredients, setIngredients] = useState(['']);

  const handleInputChange = (index, event) => {
    const values = [...ingredients];
    values[index] = event.target.value;
    setIngredients(values);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
    console.log(ingredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode processar os dados do formulário
    console.log('Ingredientes:', ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Receita</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)}>Remover</button>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>Adicionar Ingrediente</button>
      <button type="submit">Cadastrar Receita</button>
    </form>
  );
}

export default RecipeForm;
