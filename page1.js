import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const nav = useNavigate();

  const handleBuyItem = (item) => {
    const selectedItemsWithImages = selectedItems.map((selectedItem) => ({
      ...selectedItem,
      image: foodItems.find((foodItem) => foodItem.id === selectedItem.id)?.image,
    }));
    nav("/verify", { state: { selectedItems: selectedItemsWithImages } });
    console.log(`Buying item: ${item.name}`);
  };

  const handleAddToCart = (item) => {
    const existingItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);

    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) => {
        if (selectedItem.id === item.id) {
          return {
            ...selectedItem,
            quantity: selectedItem.quantity + 1,
          };
        }
        return selectedItem;
      });

      setSelectedItems(updatedItems);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
        image: foodItems.find((foodItem) => foodItem.id === item.id)?.image,
      };

      setSelectedItems([...selectedItems, newItem]);
    }
  };

  const handleRemoveFromCart = (item) => {
    
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const handleDecrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        return { ...selectedItem, quantity: selectedItem.quantity - 1 };
      }
      return selectedItem;
    });

    setSelectedItems(updatedItems);
  };

  const handleIncrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        const newQuantity = selectedItem.quantity + 1;
        const newPrice = item.price * newQuantity;
        return { ...selectedItem, quantity: newQuantity, price: newPrice };
      }
      return selectedItem;
    });

    setSelectedItems(updatedItems);
  };

  const foodItems = [
    // Food items data
    { id: 1, name: 'Pizza', price: 1099, image: 'https://images.pexels.com/photos/5903101/pexels-photo-5903101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Burger', price: 699, image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Sushi', price: 1299, image: 'https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Pasta', price: 999, image: 'https://images.pexels.com/photos/226004/pexels-photo-226004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Steak', price: 1599, image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Salad', price: 899, image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Chicken Wings', price: 999, image: 'https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Tacos', price: 799, image: 'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 9, name: 'Sandwich', price: 599, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 10, name: 'Ice Cream', price: 499, image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 11, name: 'Sushi Roll', price: 1199, image: 'https://images.pexels.com/photos/5900504/pexels-photo-5900504.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, name: 'Fried Chicken', price: 899, image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    // Food items data
  ];

  const wrapperStyle = {
    backgroundColor: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    
  };

  const headerStyle = {
    width: '100%',
    height: '60px',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const navigationStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const navigationLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const contentContainerStyle = {
    marginTop: '100px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const itemCardStyle = {
    width: '200px',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const itemImageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const itemNameStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const itemPriceStyle = {
    color: '#5b86e5',
    marginBottom: '10px',
  };

  const itemActionsStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const itemActionButtonStyle = {
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '14px',
    marginRight: '5px',
    cursor: 'pointer',
  };

  const itemQuantityStyle = {
    margin: '0 10px',
  };

  const cartStyle = {
    width: '500px',
    backgroundColor: 'grey',
    borderRadius: '5px',
    padding: '10px',
    position: 'fixed',
    top: '6px',
    right: '0px',
    left:'500px',
    boxShadow: '0 2px 4px rgb0a(0, 0, 0, 0.1)',
    zIndex: '1',
  };

  const cartHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const cartTitleStyle = {
    fontWeight: 'bold',
  };

  const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px', // Increase the marginBottom value to move the button down
  };

  const cartItemNameStyle = {
    flexGrow: '1',
    marginRight: '10px',
  };

  const cartItemPriceStyle = {
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const cartTotalStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
    fontWeight: 'bold',
  };

  const cartCheckoutButtonStyle = {
    backgroundColor: '#5b86e5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
  };
  

  return (
    <div style={wrapperStyle}>
      <header style={headerStyle}>
        <Link to="/" style={logoStyle}>
          Bite Foods
        </Link>
        <nav style={navigationStyle}>
          <Link to="/" style={navigationLinkStyle}>
            Home
          </Link>
          <Link to="/profile" style={navigationLinkStyle}>
            Profile
          </Link>
        </nav>
      </header>

      <div style={contentContainerStyle}>
        {foodItems.map((item) => (
          <div key={item.id} style={itemCardStyle}>
            <img src={item.image} alt={item.name} style={itemImageStyle} />
            <div style={itemNameStyle}>{item.name}</div>
            <div style={itemPriceStyle}>{item.price}</div>
            <div style={itemActionsStyle}>
              <button
                style={itemActionButtonStyle}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                style={itemActionButtonStyle}
                onClick={() => handleBuyItem(item)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <div style={cartStyle}>
          <div style={cartHeaderStyle}>
            <div style={cartTitleStyle}>Cart</div>
            <div>({selectedItems.length} items)</div>
          </div>

          {selectedItems.map((item) => (
            <div key={item.id} style={cartItemStyle}>
              <div style={cartItemNameStyle}>
                {item.name} ({item.quantity})
              </div>
              <div style={cartItemPriceStyle}>{item.price}</div>
              <div>
                <button
                  style={itemActionButtonStyle}
                  onClick={() => handleDecrementQuantity(item)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span style={itemQuantityStyle}>{item.quantity}</span>
                <button
                  style={itemActionButtonStyle}
                  onClick={() => handleIncrementQuantity(item)}
                >
                  +
                </button>
                <button
                  style={itemActionButtonStyle}
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={cartTotalStyle}>
            <div>Total:</div>
            <div>
              {selectedItems.reduce((total, item) => total + item.price, 0)}
            </div>
          </div>

          <button
            style={cartCheckoutButtonStyle}
            onClick={() => nav("/verify", { state: { selectedItems } })}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Page1;
