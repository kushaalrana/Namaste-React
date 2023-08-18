import React, { useEffect, useState } from "react";

const useRestaurant = () => {
  const [allRestaurant, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.532596384032388&lng=78.48343838006258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("TER", json?.data);
    // json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurant;
};

export default useRestaurant;
