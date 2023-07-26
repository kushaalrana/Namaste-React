import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    // console.log(
    //   "GETTTT",
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
    //     (item) => item?.card?.info?.name
    //   )
    // );

    setRestaurant(json.data);
    // setRestaurant(json.data.cards[0].card.card.info);
    // setMenuItems(json.data.cards[2]);
  }
  return restaurant;
};

export default useRestaurantMenu;
