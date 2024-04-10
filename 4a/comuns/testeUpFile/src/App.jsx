import React, { useState } from 'react';

const CarForm = () => {
  const [carData, setCarData] = useState({
    modelName: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.map(file => URL.createObjectURL(file));
    setCarData({ ...carData, images: [...carData.images, ...imageFiles] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do carro, incluindo as imagens, para o servidor
    console.log(carData);
    // Reiniciar o estado após o envio bem-sucedido
    setCarData({
      modelName: '',
      images: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model Name:
        <input
          type="text"
          name="modelName"
          value={carData.modelName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Images:
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">Submit</button>
      {/* Exibindo imagens selecionadas */}
      <div>
        {carData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            style={{ width: '100px', height: '100px', margin: '5px' }}
          />
        ))}
      </div>
    </form>
  );
};

export default CarForm;
