import { restaurantList } from "../constants";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const allRestaurant = useRestaurant();
  debugger;
  let filteredRestaurants = allRestaurant;

  // const isOnline = useCheckOnline();
  // if (!isOnline) {
  //   return <h1>🔴 Offline, Please Check your internet connection</h1>;
  // }

  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="p-2 m-3 bg-purple-500 text-white rounded-md"
          onClick={() => {
            filteredRestaurants = filterData(searchText, allRestaurant);
            // setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {console.log(filteredRestaurants, "Filter")}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
