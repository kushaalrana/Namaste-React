import { useState } from "react";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";

export const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpusZSMNNFm0knw1b-Vx04o6kBD6vBt54ppoH8w0&s"
      alt="Food Castle"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useCheckOnline();

  return (
    <div className="flex justify-between bg-pink-200 shadow">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contacts</li>
          </Link>
          <Link to="/">
            <li className="px-2">Carts</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/instacart">
            <li className="px-2">Instacart</li>
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
