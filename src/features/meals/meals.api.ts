
import { mealdb } from "@/lib/api";
import type {
  Meal,
  Recipe,
  SearchResponse,
  CategoriesResponse,
} from "./meals.types";

export function toRecipe(meal: Meal): Recipe {
  const ingredients = Array.from(
    { length: 20 },
    (_, index) => meal[`strIngredient${index + 1}`]
  ).filter(
    (ingredient): ingredient is string =>
      Boolean(ingredient?.trim())
  );

  return {
    mealId: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    thumb: meal.strMealThumb,
    ingredients,
    time: 0,
    notes: "",
    favorite: false,
  };
}

export async function searchMeals(
  query: string
): Promise<Recipe[]> {
  const response = await mealdb.get<SearchResponse>(
    "/search.php",
    { params: { s: query } }
  );

  return (response.data.meals ?? []).map(toRecipe);
}

export async function getCategories(): Promise<string[]> {
  const response = await mealdb.get<CategoriesResponse>(
    "/categories.php"
  );

  return (response.data.categories ?? []).map(
    ({ strCategory }) => strCategory
  );
}

export async function getMealById(
  mealId: string
): Promise<Recipe | null> {
  const response = await mealdb.get<SearchResponse>(
    "/lookup.php",
    { params: { i: mealId } }
  );

  const meal = response.data.meals?.[0];

  return meal ? toRecipe(meal) : null;
}
