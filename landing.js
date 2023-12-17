import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/Signup';
const Landing = () => {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
p{
    color : white;
}
p1{
    color : black;
}
          header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #f8f8f8;
            padding: 20px;
            border-bottom: 1px solid #ddd;
          }

          nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
          }

          nav li {
            margin-right: 10px;
          }

          nav a {
            text-decoration: none;
            color: #333;
          }

        //   .login-signup {
        //     display: flex;
        //     margin-right: auto;
        //     align-items: center;
        //   }

          .btn {
            margin-left: 10px;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          main {
            padding: 100px 80px 20px;
            background-image: url('https://images.pexels.com/photos/17156325/pexels-photo-17156325/free-photo-of-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-size: cover;
            background-position: center;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
          }

          .hero {
            text-align: center;
            margin-bottom: 40px;
          }

          .about {
            margin-bottom: 40px;
          }

          h2{
            color:red;
          }
          h1{
            color:red;
          }
          footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            border-top: 1px solid #ddd;
          }
        `}
      </style>
      <header>
        <nav>
          <ul>
            <li><a href="./home">Home</a></li>
            <li><a href="./page1">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Address</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
          <div className="login-signup">
          <Link to="/register"><button className="btn">Sign Up</button></Link>
              <Link to="/login"><button className="btn">Login</button></Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="left-image"></div>
        <div className="right-image"></div>
        <section className="hero">
          <h1>Welcome to BITE FOODS!</h1>
          <p>Order delicious food from your favorite restaurants.</p>
          <Link to="/page1"><button className="btn">Browse Menu</button></Link>
        </section>
        <section className="about">
          <h2>AboutBite foods</h2>
          <p>Bite Foods is an online food ordering platform that connects you with a variety of restaurants and allows you to order your favorite dishes from the comfort of your home.</p>
          <p>With FoodOrder, you can explore menus, customize your orders, and have your food delivered to your doorstep. We offer a wide range of cuisines to satisfy your cravings.</p>
        </section>
      </main>
      <footer>
        <p1>&copy; 2023 FoodOrder. All rights reserved.</p1>
      </footer>
    </div>
  );
}

export default Landing;
