import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const username = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/login/getbyid/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Enable edit mode
  const enableEditMode = () => {
    setEditMode(true);
    setEditedUser(user);
  };

  // Handle input changes during edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteUser = () => {
    axios
      .delete(`http://localhost:8080/login/delete/${user.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  // Save changes
  const saveChanges = () => {
    axios
      .put(`http://localhost:8080/login/update`, editedUser)
      .then((response) => {
        // Update the user state with the editedUser object
        setUser(response.data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  // Styles
  const labelStyle = {
    fontWeight: 'bold',
    color: 'your-color', // Update with your desired color
  };

  const passwordContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const inputStyle = {
    marginRight: '1rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2',
    color: '#333',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyleEditMode = {
    marginRight: '1rem',
    padding: '0.5rem',
    border: '2px solid blue',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: 'blue',
    boxShadow: '0 2px 6px rgba(0, 0, 255, 0.3)',
  };

  const styles = {
    backgroundImage:
      "url('https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const editButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const saveButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const backButtonStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const deleteButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '1rem',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>User Profile</h1>
      <div style={styles}></div>
      <div>
        <label style={labelStyle}>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        {editMode ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            style={inputStyleEditMode}
          />
        ) : (
          <p style={{ color: 'your-color' }}>{user && user.name}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Username:</label>
        {editMode ? (
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
            style={inputStyleEditMode}
          />
        ) : (
          <p style={{ color: 'your-color' }}>{user && user.username}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        {editMode ? (
          <input
            type="text"
            name="age"
            value={editedUser.age}
            onChange={handleInputChange}
            style={inputStyleEditMode}
          />
        ) : (
          <p style={{ color: 'your-color' }}>{user && user.age}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        {editMode ? (
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            style={inputStyleEditMode}
          />
        ) : (
          <p style={{ color: 'your-color' }}>{user && user.email}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Password:</label>
        <div style={passwordContainerStyle}>
          {editMode ? (
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={editedUser.password}
              onChange={handleInputChange}
              style={inputStyleEditMode}
            />
          ) : (
            <input
              type="password"
              value="********"
              readOnly
              style={inputStyle}
            />
          )}
          <button onClick={togglePasswordVisibility} style={buttonStyle}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        {editMode ? (
          <>
            <button onClick={saveChanges} style={saveButtonStyle}>
              Save
            </button>
            <button onClick={() => setEditMode(false)} style={backButtonStyle}>
              Back
            </button>
          </>
        ) : (
          <>
            <button onClick={enableEditMode} style={editButtonStyle}>
              Edit
            </button>
            <button onClick={deleteUser} style={deleteButtonStyle}>
              Delete
            </button>
            <Link to="/page1" style={backButtonStyle}>
              Back to Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
