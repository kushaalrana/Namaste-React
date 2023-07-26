export function filterData(searchText, restaurants) {
  return filteredRestaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
}
