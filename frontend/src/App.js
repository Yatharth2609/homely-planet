import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    quantity: '',
    price: '',
    total: '',
    profit: ''
  });
  const [isApiData, setIsApiData] = useState(false);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/form-data');
      setFormData(response.data);
      setIsApiData(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsApiData(false); // Switch to manual input mode
    
    let updatedData = {
      ...formData,
      [name]: value
    };

    // Only perform calculations if user is manually entering data
    if (!isApiData) {
      if (name === 'quantity' || name === 'price') {
        const quantity = name === 'quantity' ? parseFloat(value) : parseFloat(formData.quantity);
        const price = name === 'price' ? parseFloat(value) : parseFloat(formData.price);
        
        if (!isNaN(quantity) && !isNaN(price)) {
          updatedData.total = (quantity * price).toFixed(2);
        }
      }
    }

    setFormData(updatedData);
  };

  return (
    <div className="app-container">
      <h1>Dynamic Form</h1>
      <div className="data-source">
        Data Source: {isApiData ? 'API' : 'Manual Input'}
      </div>
      <form className="form-container">
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Total:</label>
          <input
            type="number"
            name="total"
            value={formData.total}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Profit (%):</label>
          <input
            type="number"
            name="profit"
            value={formData.profit}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={fetchDataFromApi} className="fetch-button">
        Fetch New Data
      </button>
    </div>
  );
}

export default App;
