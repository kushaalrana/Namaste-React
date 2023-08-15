import { useParams } from "react-router-dom";
import { IMG_CND_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); //TODO: get the id from the url

  //   const { id } = params;
  // const [restaurant, setRestaurant] = useState(null);

  let restaurant = useRestaurantMenu(resId);
  console.log("YEE", restaurant);
  const menuItems = restaurant;
  restaurant = restaurant?.cards[0]?.card?.card?.info;

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(FETCH_MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(
  //     "GETTTT",
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
  //       (item) => item?.card?.info?.name
  //     )
  //   );

  //   setRestaurant(json.data.cards[0].card.card.info);

  // setMenuItems(json.data.cards[2]);

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="p-10">
        <h1 className="text-center font-bold">Restaurant id: {resId}</h1>
        <h2 className="text-center font-semibold m-5">{restaurant?.name}</h2>
        <img src={IMG_CND_URL + restaurant?.cloudinaryImageId} alt="" />
        <h2 className="text-center font-semibold m">{restaurant?.area}</h2>
        <h2 className="text-center font-semibold m">{restaurant?.city}</h2>
        <h2 className="text-center font-semibold m">{restaurant?.avgRating}</h2>
        <h2 className="text-center font-semibold m">
          {restaurant?.costForTwoMessage}
        </h2>
      </div>

      <div className="p-11 mt-9">
        <h1 className="font-bold">Menu</h1>
        <ul className="font-semibold">
          {menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item, key) => (
              <li key={key}> {item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
