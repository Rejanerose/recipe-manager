
import type { Recipe } from "@/features/meals/meals.types";

/** A recipe saved in localStorage with a unique string ID. */
export interface SavedRecipe extends Recipe {
  id: string;
}

/** What we send when creating a saved recipe. */
export type NewRecipe = Recipe;

/** The ID identifies the recipe; remaining fields are optional updates. */
export type RecipePatch = {
  id: string;
} & Partial<Omit<SavedRecipe, "id">>;
