import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentDetails from './PaymentDetails';

const Verify = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const [showPayment, setShowPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePay = () => {
    setShowPayment(false);
    setOrderPlaced(true);
  };

  const styles = {
    backgroundImage:
      "url('https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
    
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    fontFamily: 'Arial, sans-serif',
    zIndex: '-1',
  };

  const containerStyles = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
  };

  const pageHeadingStyles = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const itemsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const itemStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
    marginRight: '20px',
  };

  const itemImageStyles = {
    width: '100px',
    height: '100px',
  };

  const itemNameStyles = {
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const itemPriceStyles = {
    color: '#777',
    marginBottom: '5px',
  };

  const itemQuantityStyles = {
    color: '#777',
    marginBottom: '5px',
  };

  const payButtonStyles = {
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    marginLeft: '10px',
  };
  

  const orderPlacedMessageStyles = {
    backgroundColor: '#c7f7c2',
    padding: '10px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyles}>
      <div style={styles}></div>
      <h1 style={pageHeadingStyles}>Ordered Items</h1>
      <div style={itemsContainerStyles}>
        {selectedItems.map((item) => (
          <div key={item.id} style={itemStyles}>
            <img
              src={item.image}
              alt={item.name}
              style={itemImageStyles}
            />
            <div>
              <h3 style={itemNameStyles}>{item.name}</h3>
              <p style={itemPriceStyles}>Price: {item.price}</p>
              <p style={itemQuantityStyles}>Quantity: {item.quantity}</p>
              <button
                style={payButtonStyles}
                onClick={() => setShowPayment(true)}
              >
                Pay Amount
              </button>
            </div>
          </div>
        ))}
      </div>
      {showPayment && <PaymentDetails handlePay={handlePay} />}
      {orderPlaced && (
        <div style={orderPlacedMessageStyles}>
          <p>Order Placed!</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
