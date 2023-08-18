import { IMG_CND_URL } from "../constants";
import userContext from "../utils/userContext";
import { useContext } from "react";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-72 p-2 m-2 shadow-lg bg-pink-50 ">
      <img className="image" src={IMG_CND_URL + cloudinaryImageId} alt="" />
      <h2 className="font-bold ">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString} </h4>
      <h5 className="font-bold">
        {user.name}-{user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
