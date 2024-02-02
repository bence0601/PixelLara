import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

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
    DeadLine: '', // Initialize with an empty string
    Contact: ContactEnum.Email,
    ContractTimeSet: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
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
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Short Description:
        <input className="form-input" type="text" name="ShortDescription" value={product.ShortDescription} onChange={handleChange} />
      </label>
      <label className="form-label">
        Long Description:
        <textarea className="form-textarea" name="LongDescription" value={product.LongDescription} onChange={handleChange} />
      </label>
      <label className="form-label">
        Dead Line:
        <input className="form-input" type="datetime-local" name="DeadLine" value={product.DeadLine} onChange={handleChange} />
      </label>
      <label className="form-label">
        Contact:
        <select className="form-select" name="Contact" value={product.Contact} onChange={handleChange}>
          <option value={ContactEnum.Email}>Email</option>
          <option value={ContactEnum.InPerson}>In Person</option>
          <option value={ContactEnum.OnPhone}>On Phone</option>
          <option value={ContactEnum.VideoChat}>Video Chat</option>
        </select>
      </label>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
