
import { api } from "@/lib/api";
import type { SavedRecipe, NewRecipe, RecipePatch } from "./recipes.types";

export const getRecipes = async (): Promise<SavedRecipe[]> => {
  return (await api.get<SavedRecipe[]>("/recipes")).data;
};

export const createRecipe = async (
  recipe: NewRecipe
): Promise<SavedRecipe> => {
  return (await api.post<SavedRecipe>("/recipes", recipe)).data;
};

export const updateRecipe = async ({
  id,
  ...patch
}: RecipePatch): Promise<SavedRecipe> => {
  return (await api.patch<SavedRecipe>(`/recipes/${id}`, patch)).data;
};

export const deleteRecipe = async (
  id: number
): Promise<{ id: number }> => {
  await api.delete(`/recipes/${id}`);
  return { id };
};
