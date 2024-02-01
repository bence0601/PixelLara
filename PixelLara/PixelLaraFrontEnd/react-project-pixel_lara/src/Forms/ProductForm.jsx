import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const ContactEnum = {
    Email: 0,
    InPerson: 1,
    OnPhone: 2,
    VideoChat: 3
  };

  const [product, setProduct] = useState({
    ShortDescription: '',
    LongDescription: '',
    DeadLine: '',
    Contact: ContactEnum.Email, // Alapértelmezett érték beállítása
    ContractTimeSet: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'Contact' ? parseInt(value) : value; // Csak a Contact mezőt konvertáljuk számmá
    setProduct(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7049/AddProduct', product);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Short Description:
        <input type="text" name="ShortDescription" value={product.ShortDescription} onChange={handleChange} />
      </label>
      <label>
        Long Description:
        <textarea name="LongDescription" value={product.LongDescription} onChange={handleChange} />
      </label>
      <label>
        Dead Line:
        <input type="date" name="DeadLine" value={product.DeadLine} onChange={handleChange} />
      </label>
      <label>
        Contact:
        <select name="Contact" value={product.Contact} onChange={handleChange}>
          <option value={ContactEnum.Email}>Email</option>
          <option value={ContactEnum.InPerson}>In Person</option>
          <option value={ContactEnum.OnPhone}>On Phone</option>
          <option value={ContactEnum.VideoChat}>Video Chat</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
