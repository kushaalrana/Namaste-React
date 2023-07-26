import { useState } from "react";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpusZSMNNFm0knw1b-Vx04o6kBD6vBt54ppoH8w0&s"
      alt="Food Castle"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useCheckOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contacts</li>
          </Link>
          <Link to="/">
            <li>Carts</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/instacart">
            <li>Instacart</li>
          </Link>
        </ul>
      </div>
      {isOnline ? "✅" : "🔴"}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
