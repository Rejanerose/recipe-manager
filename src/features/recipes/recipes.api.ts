
import { api } from "@/lib/api";
import type {
  SavedRecipe,
  NewRecipe,
  RecipePatch,
} from "./recipes.types";

export const getRecipes = async (): Promise<SavedRecipe[]> => {
  const response = await api.get<SavedRecipe[]>("/recipes");
  return response.data;
};

export const createRecipe = async (
  recipe: NewRecipe
): Promise<SavedRecipe> => {
  const row: SavedRecipe = {
    ...recipe,
    id: crypto.randomUUID(),
  };

  const response = await api.post<SavedRecipe>("/recipes", row);
  return response.data;
};

export const updateRecipe = async ({
  id,
  ...patch
}: RecipePatch): Promise<SavedRecipe> => {
  const response = await api.patch<SavedRecipe>(
    `/recipes/${encodeURIComponent(id)}`,
    patch
  );

  return response.data;
};

export const deleteRecipe = async (
  id: string
): Promise<{ id: string }> => {
  await api.delete(`/recipes/${encodeURIComponent(id)}`);
  return { id };
};
