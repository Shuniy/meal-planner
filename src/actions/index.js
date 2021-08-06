export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDER = "REMOVE_FROM_CALENDER";

export function addRecipe({ day, meal, recipe }) {
  return {
    type: ADD_RECIPE,
    day,
    meal,
    recipe,
  };
}

export function removeFromCalender({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDER,
    day,
    meal,
  };
}
