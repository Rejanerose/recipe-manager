
import { Link } from "react-router-dom";
import type { Recipe } from "@/features/meals/meals.types";

interface MealCardProps {
  meal: Recipe;
  onSave: (meal: Recipe) => void;
  isSaved: boolean;
  isSaving: boolean;
}

export default function MealCard({
  meal,
  onSave,
  isSaved,
  isSaving,
}: MealCardProps) {
  const { title, category, thumb, ingredients, mealId } = meal;

  return (
    <div className="card bg-base-100 shadow">
      <Link to={`/recipe/${mealId}`} aria-label={`View ${title} recipe`}>
        <figure className="h-40 overflow-hidden">
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </figure>
      </Link>

      <div className="card-body">
        <h2 className="card-title text-base">
          <Link
            to={`/recipe/${mealId}`}
            className="link link-hover"
          >
            {title}
          </Link>
        </h2>

        <div className="flex gap-2">
          <span className="badge badge-primary">{category}</span>
          <span className="badge badge-ghost whitespace-nowrap">
            {ingredients.length} ingredients
          </span>
        </div>

        <div className="card-actions justify-end mt-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onSave(meal)}
            disabled={isSaved || isSaving}
          >
            {isSaved ? "Saved" : isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
