
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSavedRecipes } from "@/features/recipes/recipes.hooks";
import { AuthProvider } from "@/features/auth/auth.hooks";
import Layout from "@/components/Layout";
import RequireAuth from "@/components/RequireAuth";
import SearchPage from "@/pages/SearchPage";
import SavedPage from "@/pages/SavedPage";
import LoginPage from "@/pages/LoginPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import NotFound from "@/pages/NotFound";

function AppRoutes() {
  const { saved } = useSavedRecipes();

  return (
    <Routes>
      <Route element={<Layout savedCount={saved.length} />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/saved" element={<SavedPage />} />
        </Route>
        <Route path="/recipe/:mealId" element={<RecipeDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
